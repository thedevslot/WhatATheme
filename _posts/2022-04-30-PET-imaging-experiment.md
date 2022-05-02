---
title: Positron Emission Tomography (PET)
layout: post
post-image: "https://raw.githubusercontent.com/levikeay/Project_Site/d3e30ba88913de760b18a511d7e9013c9304f40c/assets/images/PET_diagram_offcenter_filtered.png"
description: I performed this imaging experiment as a part of Physics 409.

---
 Positron Emission tomography (PET) is an imaging modality which uses the $\beta$^+^ decay of a radiation sample as its imaging energy source. This decay is ideal for this purpose, as the positron/ electron annihilation which occurs results in two equal energy photons being emitted in opposing directions.
 This known directionality of emmision is the underlying principle which makes this imaging possible. In order to leverage this knowledge, PET scanners use opposing detectors. When two detectors are activated simultaneously, then the radiation source is known to be along the line between them.
 
 In modern PET systems this is usually achieved by having a ring of detectors surrounding the imaging area. In this experiment, the set-up consitutes just two detectors, directly opposing each other. Radioactive samples can then be placed in the staging area and moved along the track in one dimension, as well as rotatiing. These 2 degrees of freedom can then be combined to form a 2 dimensional image by the meana of an inverse radon transform
 
Profiles of two source imaging at eifferent angles look like this: 

![scan profiles for 9 angles](/assets/images/rotation_subplots.jpeg)


My reduced paper Intro:

PET is a medical imaging modality which functions on the the principle of colinear gamma ray
emissions from a radiation source undergoing beta
positive decay. By knowing the relative locations
of the detector pairs which collect such emissions,
an image of the radiation can be reconstructed as
long as sufficient projections are obtained from a
variety of angles. Important attributes of signal
quality include spatial resolution, blurring, and
signal to noise ratio (SNR). Spatial resolution can
be improved by taking more projections and using
finer spatial increments when scanning. Blurring
can be improved by decreasing the available detector area by the narrowing of a blocking aperture,
but this comes at the expense of decreasing overall count rate and thereby diminishing the SNR
also. All three of these attributes are of importance for accurate diagnosis and monitoring in a
medical setting. While enhancing spatial resolution is largely a problem of increasing the number of detectors available or using more granular
step sizes in a 2 detector system, the trade-off existing between blurring and SNR when it comes
to aperture choice is non-trivial. In this letter I
will present a method for measuring the blurring
and SNR of a two detector PET system present in
scans of an Na-22 radiation source in a lab setting,
and provide insight into choosing an appropriate
aperture value depending on use case.
The analytical model of the relative count
number as a function of distance, jxj, is found
as follows. We assume isotropic random emission,
and simplifying the geometry to the 2 dimensional
case in which we observe from the birds eye view.
A schematic is shown in figure 1. The relative
number of photons counted as a function of the
distance from the center of the imaging area, x,
is given by the normalized sum of the regime areas multiplied by their respective probabilities of
detecting both co-linear photons.
This can be formulated by comparing areas on
the unit circle, and because the regimes are symmetrical about both the horizontal and vertical
axes, we can restrain the problem to the area of
one quadrant of the circle
