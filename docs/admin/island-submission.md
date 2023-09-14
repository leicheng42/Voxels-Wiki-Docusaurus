# Island Submission

It is possible to submit your own islands designs for minting on Cryptovoxels. We haven't worked out how ownership / sales / minting process will work, but we are making the tools available so people can start experimenting with islands and thinking about how the process might work.

## Blender

Youy need to use [Blender](https://www.blender.org/) to create your sample Island. Open this sample island:

[island-template.blend](/island-template.blend)

Inside this island you'll see a bunch of cubes with a semi parcel layout.

![screen_shot_2021-04-14_at_11.26.58_am.png](/screen_shot_2021-04-14_at_11.26.58_am.png)

When you're editing, make sure you have snapping turned on. Parcels need to be an integer number of meters in size. 

Snapping:

![screen_shot_2021-04-14_at_11.25.22_am.png](/screen_shot_2021-04-14_at_11.25.22_am.png)

You can use the dimensions pop out (press `n`) to see the size of your parcels:

![blender-dimensions.png](/blender-dimensions.png)

Duplicate, delete and resize your parcels until they're all good. Then save your blend file. Then `.obj` export your blend. Make sure you tick `triangulate faces`. Then you can use this with the island preview tool to see what your island will look like. When you import your obj to the island previe tool, it'll convert anything called `plot-...` or `unit-...` into a parcel, and `island` will become your island. It'll also alert you if any of your parcels seem degenerate or intersect with another parcel.

(The island preview is not deployed yet, we'll update this page when we do)

![island-preview.png](/island-preview.png)

Limits:

* Parcels must be at least 4x4x4.
* Islands must have less than 128 parcels
* Parcels may not be bigger than 96 meters sum of dimensions (32+32+32)

Submission:

* We do not guarantee any island will be submitted
* We don't have a process for this yet, it's all experimental


