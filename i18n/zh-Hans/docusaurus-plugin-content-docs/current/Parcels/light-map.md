# Baking
Lightmap baking

## Lightmap Baking

Lightmapping is the act of using a renderer to accurately measure how light enters and bounces around inside your parcel, and then calculates a 'lightmap', an image that can be rendered in realtime when exploring your parcel. 

The lightmap is expensive (computer speak for slow) to calculate, so we generate the lightmaps on a computer with a Ryzen 7 CPU and RTX 2070 GPU. Once these are calculated, we save the lightmaps on the internet and make them accessible from the web client.

That means that all computers (including our favourite potatos) can render high quality lighting inside a parcel.

### Examples

![baking.png](/baking.png)
![baking-2.png](/baking-2.png)

### How to enable

1. Go to your parcel in-world
2. Hit <kbd>Tab</kbd> and go to Tiles
3. Scroll down the editor
![baking_menu_editor_v4.25.png](/baking_menu_editor_v4.25.png)

4. Click `Bake ligthmap` and wait a bit.

If baking doesn't start, there might be a problem with the software that runs on the baking PC (we're going to make it more robust with time), hit us up on twitter or discord and we'll get it started again.

We're going to make baking more reliable and robust with time.

:::caution
Everytime you edit your parcel the baked lightmap will be cleared and will require a new bake!
You can also manually clear a lightmap using the same editor:
![baking_menu_editor_clear_v4.25.png](/baking_menu_editor_clear_v4.25.png)
:::


### Using Lanterns

[Lanterns](/docs/features/lantern) are small emitting blocks. You can scale the emitters to make area lights or strip lights. You can use the strength slider to change the intensity. You can change the color of the emitter too. Light is modelled additively, so if you put a strong red and green light side by side, the combined light will be orange.

Activating light-mapping is necessary for this feature.

### Using glass

Light flows through glass with no attentuation. We plan to add colored (stained) glass later.

### What is calculated

Currently we only calculate the lighting from the voxel field in your parcel. We ignore any .vox models, polytext, or images. We may add support for baking these in the future, or at least considering them when calculating the lighting.
