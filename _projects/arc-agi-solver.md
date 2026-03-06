---
layout: page
title: ARC-AGI Solver
description: A fine-tuned and test-time-scaled solver for ARC-style reasoning tasks.
importance: 2
---

This project was built for a deep learning course and finished 1st out of 35 teams on the hidden evaluation.

## Highlights

- Fine-tuned Qwen3-4B with LoRA and curated task augmentation.
- Combined fine-tuning with test-time training and grid-wise majority voting for more stable predictions.
- Designed a fine-grained loss to make better use of scarce few-shot supervision.
