---
layout: default
---

# Minimal distance between two points of groups

Somewhere in my research I encountered this interesting problem: I have a large group of atoms A, and another, smaller group of atoms B. I want to find, for each atom of A, the closest distance to any B. To add a bit of context, group A is water (6325 oxygen atoms), and group B is protein atoms (304 atoms). To add complexity, I have 5000 frames from a trajectory, where water can move but protein is fixed. 

Back of the envelope calculation shows that there will be 5000 * 6325 * 304 = \~1e10 distance calculations. That is quite a lot, so it's definitely worth looking into how to make this calculation faster. I'll present several methods with increasing efficiency.

Let's set up the variables here: `Ppos` (protein position) is a 304-by-3 matrix that does not change, and `Wpos` (water position) is a 6325-by-3 matrix for every frame. To access water position for each frame, assume the following.

```python
for frame in range(5000):
  Wpos = getWaterPosition()
```

Our goal is to accumulate the shortest distance into a matrix `distList`, and perform a histogram method to get the distribution.

## Approach 1: The really naive way

```python
import numpy as np
Ppos = getProteinPosition()
distList = []
for frame in range(5000):
  Wpos = getWaterPosition()
  for i in Wpos:
    minDistance = 5000 # It's quite long
    for j in Ppos:
      distance = np.sqrt(((Ppos[j] - Wpos[i])**2).sum(1))
      if distance < minDistance:  
        minDistance = distance
    distList.append(minDistance)
```

## Approach 2: Using np.linalg and broadcast
```python
import numpy as np
import numpy.linalg as la
Ppos = getProteinPosition()
distList = []
for frame in range(5000):
  Wpos = getWaterPosition()
  for i in Wpos:
    distList.append(np.min(la.norm(i - Ppos, axis = 1)))
```

## Approach 3: Using more broadcasting

```python
import numpy as np
Ppos = getProteinPosition()
distList = []
for frame in range(5000):
  Wpos = getWaterPosition()
  distList.append(np.min(np.sqrt(
      ((Wpos[:, :, None] - Ppos[:, :, None].T) ** 2).sum(1)),axis=1)
    )
```

## Approach 4: Using numba to leverage parallelism
```python
import numpy as np
from numba import njit, prange
Ppos = getProteinPosition()
distList = []
for frame in range(5000):
  Wpos = getWaterPosition()
  distList.append(WPFunction(Wpos, Ppos))

@njit(parallel=True)
def WPFunction(Wpos, Ppos):
  WPLen = len(Wpos)
  distList = np.zeros(WPlen)
  for i in prange(WPLen):
    dist = np.sqrt(((WPos - Ppos)**2).sum(1))
    distList[i] = np.min(dist)
  return distList
```

## Approach 5: Stack frames and process them all at once
```python
import numpy as np
from numba import njit, prange
Ppos = getProteinPosition()
distList = []
stackFrames = 5
stackCounter = 0
WLen = len(Wpos)
Wpos = getWaterPosition()
WposStack = np.zeros((WLen*stackFrames,3))
for frame in range(5000):
  Wpos = getWaterPosition()
  WposStack[stackCounter*WLen:(stackCounter+1)*WLen] = Wpos
  if (frame+1) % stackFrames == 0:
    distList.append(WPFunction(Wpos, Ppos))

@njit(parallel=True)
def WPFunction(Wpos, Ppos):
  WPLen = len(Wpos)
  distList = np.zeros(WPLen)
  for i in prange(WPLen):
    dist = np.sqrt(((WPos - Ppos)**2).sum(1))
    distList[i] = np.min(dist)
  return distList
```


[back](./)
