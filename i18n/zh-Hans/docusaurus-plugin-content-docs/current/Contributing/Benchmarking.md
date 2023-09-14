# Benchmarking

When submitting a branch which has potentially performance impact (positive or negative), someone might link you to this wiki page and ask you to benchmark your branch to make sure that you are positively impacting performance.

For the first two years of CV we did that by the 'seat of the pants' test (also know as 'it feels faster'). However, this is am impossible way to develop, so we had to create all these slightly irritating, but quantifiable tests for performance.

## 1. Use inspector

Switch to master. Find a parcel that uses the features that you are optimising - and load it in inspector mode:

`?isolate=true&inspect=true&benchmark=true`

Take a screenshot of the relevant part of the inspector. Here I'm screenshotting the number of materials.

![benchmark-stats.png](/benchmark-stats.png)

Then, switch to your branch, take another screenshot. Paste these two screenshots into your pull request to highlighting.

> Hey my branch reduces the material count from 120 to 60.

## 2. Use recording / playback

> Stig can comment on this

Play a recording from https://follower.cryptovoxels.com/recordsings/

eg:

`/play?playback=
https://follower.cryptovoxels.com/recordings/gangnam-recording.json`

Grab the logs and compare your branch vs master and paste it into your PR.
