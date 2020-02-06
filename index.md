---
layout: default
---

Hi! My name is Darren Hsu. I'm a Ph.D. student at Northwestern University. I use X-ray techniques (scattering and spectroscopy) to understand what happens in proteins and small molecules when they are perturbed by an environmental change. I am also interested in a career in data science and birding. 

This webpage provides links to my projects:

1. Data science project: "Plover" Bird Identification Web App
1. X-ray Scattering Signal-Guided Molecular Dynamics Simulation
1. Ph.D. Research Summary
1. My Publications

## "Plover" Bird Identification Web App

**Keywords: Data Science, Neural Network, Object Classification, Python, Full Stack Development**

<a href="https://www.plover-birdid.com/" target="_blank"><img src="./assets/images/plover.png"></a>

<!-- [Cropping](./assets/images/plover.png) -->

For the project website, click <a href="https://www.plover-birdid.com/" target="_blank">here</a>. 
For the Github repo, click <a href="https://github.com/ACiDS-NU/birdid" target="_blank">here</a>.

For this web app, I trained a convolutional neural network (CNN) to identify 400 common North American birds using the NAbirds dataset. You can upload a bird photo and try it out!

## X-ray Scattering Signal Guided Molecular Dynamics Simulation

**Keywords: Molecular Dynamics, CUDA C, GPU, X-ray Scattering**

For the Github repo, click <a href="https://github.com/darrenjhsu/XSNAMD" target="_blank">here</a>.

This is my Ph.D. project where we try to guide the protein motions in molecular dynamics (MD) simulations using the data we collected, which is time-resolved X-ray solution scattering signal (TRXSS) of proteins. 

The TRXSS signal reflects changes in the atomic distance distribution, which can be modeled with the Debye formula. However Debye formula is very expensive (proportional to number of scatterers squared) so I developed GPU code to do parallel computing, giving it a 12,000x boost in efficiency.

A publication is being prepared. 

## Ph.D. Research summary

During my Ph.D. I have been working with Prof. Lin Chen at Northwestern University on tracking and characterizing disordered protein structures when they are subject to external excitation, such as light, temperature-jump, pH-jump, or chemical reduction. I did a large part of my research at the Advanced Photon Source at Argonne National Laboratory, where I utilized the BioCARS beamline for time-resolved X-ray solution scattering, 11-ID-D beamline for X-ray transient absorption spectroscopy, and DND-CAT for small-angle X-ray scattering.

Another part of my research is about how to explain X-ray scattering signal as it is in reciprocal space. One way to do so would be to simulate a lot of protein structures and compare their theoretical X-ray scattering signal to the measured ones. This, however, poses a significant challenge as disordered protein structures are, well, disordered and one has to simulate many structures to find a match to the data. Therefore I decided that I will **actively** find the strucutre that fits the data by minimizing the discrepancy between the simulated and actual signals, in other words the additional potential term resulted from the mismatch in the simulations. This led to the X-ray scattering signal-guided MD simulation project detailed below.

Side projects of my Ph.D. research includes designing an aluminum nitride sample holder that will not be evaporated by the IR-laser we use to generate temperature-jumps, a co-flow capillary that minimizes sample consumption, and an X-ray emission spectrometer in hopes of getting bonus signal alongside an X-ray scattering experiment. 

Synchrotron/X-ray free electron laser (XFEL) experiments cannot be done by one person, so I have participated in many experiments that concern small molecules (vibronic coherence in di-platinum complexes, osmium-copper complexes, etc.) as well as self-assembling biomaterials (oleic acid, caseins, etc.). 

Finally, since I like writing codes, I also contribute to the time-resolved X-ray scattering processing package pytrx.

## Publications

I'm listing my publications in case you're interested in my Ph.D. work in Chemistry.

<ol reversed> 
  <li>Darren Hsu, Denis Lechshev, Dolev Rimmerman, Jiyun Hong, Matthew Kelley, Irina Kosheleva, Xiaoyi Zhang and Lin Chen.  X-ray Snapshots of Protein Folding Reveal Global Conformational Influence on Active Site Ligation. Chem. Sci., 2019, 10, 9788-9800</li>
  <li>Dolev Rimmerman, Denis Lechshev, Darren Hsu, Jiyun Hong, Baxter Abraham, Irina Kosheleva, Robert Henning and Lin Chen.  Revealing Fast Structural Dynamics in pH-Responsive Peptides with Time-Resolved X-ray Scattering. J. Phys. Chem. B 2019, 123, 9, 2016-2021.</li>
  <li>Dolev Rimmerman, Denis Lechshev, Darren Hsu, Jiyun Hong, Baxter Abraham, Robert Henning, Irina Kosheleva and Lin Chen.  Probing Cytochrome c Folding Transitions Upon Photo-Triggered Environmental Perturbations Using Time-Resolved X-Ray Scattering. J. Phys. Chem. B 2018, 122, 20, 5218-5224.</li>
  <li>Dolev Rimmerman, Denis Lechshev, Darren Hsu, Jiyun Hong, Baxter Abraham, Irina Kosheleva, Robert Henning and Lin Chen. Insulin hexamer dissociation dynamics revealed by photoinduced T-jumps and time-resolved X-ray solution scattering. Photochem. Photobiol. Sci. 2018, 17, 874-882.</li>
  <li>Dolev Rimmerman, Denis Lechshev, Darren Hsu, Jiyun Hong, Irina Kosheleva and Lin Chen. Direct Observation of Insulin Association Dynamics with Time-Resolved X-ray Scattering. J. Phys. Chem. Lett. 2017, 8, 4413-4418.</li>
</ol>


### Contact info

[LinkedIn](https://www.linkedin.com/in/darren-hsu/), 
[Github](https://github.com/darrenjhsu),
Email: darrenhsu2015 at u.northwestern.edu

