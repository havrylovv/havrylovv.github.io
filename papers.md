---
layout: default
title: Research Papers
permalink: /papers/
---

# Publications

<div class="card">
  <div class="badge-row" style="display: flex; justify-content: flex-start;">
    <div class="conf-badge">ICCV 2025 [Oral]</div>
  </div>
  <h3>LoftUp: Learning a Coordinate-Based Feature Upsampler for Vision Foundation Models</h3>
  <div class="paper-authors">Haiwen Huang, Anpei Chen, <strong class="author-self">Volodymyr Havrylov</strong>, Andreas Geiger, Dan Zhang</div>
  
  <input type="checkbox" id="abs-1" class="abstract-toggle">
  <label for="abs-1" class="abstract-label">>> View Abstract</label>
  <div class="abstract-content">
  Vision foundation models (VFMs) such as DINOv2 and CLIP have achieved impressive results on various downstream tasks, but their limited feature resolution hampers performance in applications requiring pixel-level understanding. Feature upsampling offers a promising direction to address this challenge. In this work, we identify two critical factors for enhancing feature upsampling: the upsampler architecture and the training objective. For the upsampler architecture, we introduce a coordinate-based cross-attention transformer that integrates the high-resolution images with coordinates and low-resolution VFM features to generate sharp, high-quality features. For the training objective, we propose constructing high-resolution pseudo-groundtruth features by leveraging class-agnostic masks and self-distillation. Our approach effectively captures fine-grained details and adapts flexibly to various input and feature resolutions. Through experiments, we demonstrate that our approach significantly outperforms existing feature upsampling techniques across various downstream tasks. 
  </div>

  <div class="paper-gallery">
    <img src="/assets/images/loftup_siglip2-horsejump.gif" alt="LoftUp jumping horse example" style="height: 160px;">
  </div>
  
  <div style="margin-top: 10px;">
    <a href="https://andrehuang.github.io/loftup-site/" class="mono yellow" target="_blank" rel="noopener noreferrer">[Project]</a>  <a href="https://arxiv.org/abs/2504.14032" class="mono yellow" target="_blank" rel="noopener noreferrer">[Paper]</a><a href="https://github.com/andrehuang/loftup" class="mono yellow" target="_blank" rel="noopener noreferrer">[Code]</a>
  </div>
</div>

<div class="card">
  <div class="badge-row" style="display: flex; justify-content: flex-start;">
    <div class="conf-badge">ILR+G Workshop @ ICCV 2025 [Oral]</div>
  </div>
  <h3>Benchmarking Feature Upsampling Methods for Vision Foundation Models using Interactive Segmentation</h3>
  <div class="paper-authors"><strong class="author-self">Volodymyr Havrylov</strong>, Haiwen Huang, Dan Zhang, Andreas Geiger</div>
  
  <input type="checkbox" id="abs-2" class="abstract-toggle">
  <label for="abs-2" class="abstract-label">>> View Abstract</label>
  <div class="abstract-content">
  Vision Foundation Models (VFMs) are large-scale, pre-trained models that serve as general-purpose backbones for various computer vision tasks. As VFMs' popularity grows, there is an increasing interest in understanding their effectiveness for dense prediction tasks. However, VFMs typically produce low-resolution features, limiting their direct applicability in this context. One way to tackle this limitation is by employing a task-agnostic feature upsampling module that refines VFM features resolution. To assess the effectiveness of this approach, we investigate Interactive Segmentation (IS) as a novel benchmark for evaluating feature upsampling methods on VFMs. Due to its inherent multimodal input, consisting of an image and a set of user-defined clicks, as well as its dense mask output, IS creates a challenging environment that demands comprehensive visual scene understanding. Our benchmarking experiments show that selecting appropriate upsampling strategies significantly improves VFM features quality.
  </div>

  <div class="paper-gallery">
    <img src="/assets/images/iSegProbe_teaser.jpg" alt="iSegProbe: feature upsampling bachmark for interactive segmentation " style="height: 230px;">
  </div>

  <div style="margin-top: 10px;">
    <a href="https://arxiv.org/html/2505.02075v1" class="mono yellow" target="_blank" rel="noopener noreferrer">[Paper]</a> <a href="https://github.com/havrylovv/iSegProbe" class="mono yellow" target="_blank" rel="noopener noreferrer">[Code]</a>
  </div>
</div>

<div class="card">
  <div class="badge-row" style="display: flex; justify-content: flex-start;">
    <div class="conf-badge">Journal of Molecular Structure 2025</div>
  </div>
  <h3>The effect of protein structure on optical absorption spectra of oxyhemoglobin: the hybrid QM/MM study</h3>
  <div class="paper-authors">Tetiana Afanasieva, <strong class="author-self">Volodymyr Havrylov</strong>, Serhii Mamilov</div>
  
  <input type="checkbox" id="abs-3" class="abstract-toggle">
  <label for="abs-3" class="abstract-label">>> View Abstract</label>
  <div class="abstract-content">
  We present the results of a hybrid quantum mechanics/molecular mechanics (QM/MM) study examining the effect of protein structure on the geometrical and optical properties of oxyhemoglobin in its R (relaxed) state. The quantum mechanical region was modeled using density functional theory (DFT). Optimized structures and vibrational spectra were determined using the B3LYP/6–31G(d,p) approximation. Binding energies of the oxygen molecule to the Fe-porphyrin complex were calculated using various models. The values of the binding energies were obtained in the range of 24–38 kcal/mol.

  The hydrogen bonds between oxygen and peripheral residues (distal histidine and phenylalanine) in the oxyhemoglobin were revealed. The oxyhemoglobin in α subunit is characterized by a stronger hydrogen bond between the oxygen and only distal histidine. In the β subunit, oxygen forms hydrogen bonds with both distant histidine and phenylalanine.
  The structural differences between the α and β subunits of oxyhemoglobin significantly affect its optical properties, particularly in the optical absorption spectra. The protein environment induces a larger red shift in the Soret band of the β subunit compared to the α subunit. Solvation causes a significant redshift in the Soret band of the α and β subunits and in the Q-bands of the β subunit. Conversely, solvation induces a notable blue shift in the Q-bands for the α subunits.
  </div>

  <div class="paper-gallery">
    <img src="/assets/images/qmmm_hemoglobin_teaser.png" alt="QM/MM Protein Study" style="height: 220px;">
  </div>

  <div style="margin-top: 10px;">
    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0022286025016205" class="mono yellow" target="_blank" rel="noopener noreferrer">[Paper]</a> 
  </div>

  </div>
