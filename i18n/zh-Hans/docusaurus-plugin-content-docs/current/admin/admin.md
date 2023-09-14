**Quick links:** [Admin todo list](/docs/admin/todos) ; [Competition page](/docs/competitions)

# Standardization
Every wiki pages attempt to be as standardized as possible to improve readability from page to page.

## Page styling

### Tutorials

- Tutorials usually have a title that starts with `How to` as it is intuitive and it catches the attention of a "newbie".
- Tutorials also have a Step-like structure, as it makes it easy to follow.
See [How to buy a wearable](/docs/Player_customization/Buy-a-Wearable)

### Voxel library
 - The voxel library tries to be **ordered alphabetically**; Categories range from A to B and items within the categories will be ordered alphabetically as well.
 - The voxel library has a very simple format:
```
## Category
### Item
![image](imageLink)
[file](fileLink)
```
> The reason behind this choice of format is that it will allow easy scraping in the future. We will try to bring this library in-world.
{.is-info}


## Asset management
When uploading an asset (an image,gif,...) you will see that the asset manager is fairly crowded. We now try to keep it tidy with folders and file versioning. Feel free to create a folder if you do not see a folder specific to your asset.

**If your asset is for a specific page**; name the asset with the name of your page as a prefix in brackets, for example: `[my_specific_page]your_image_name.png` or `[my-specific-page]your-image-name.png`

**If your asset is likely to change in future versions of CV**; add the version at the end of the file name. For example: `[my-specific-page]your-image-name-v4.32.png` or `...-v4_32.png`
This is the case for screenshots of editors or features for example.

# Keep track of what's going on
We have [a to-do list](/docs/admin/todos) that we update regularly. Feel free to take care of any undone tasks and feel free to comment at the bottom of the page if you're unsure of yourself.
You can also add items to the list if you don't have the time to work on it.

# Markdown cheatsheet

For information on markdown: [click here](https://docs.requarks.io/en/editors/markdown). The wikijs markdown documentation is complete and is reliable.

To make a table use:
```
|header1 | header2 |
|------|------|
|Value1| value2|
```

To position an image:
```
![myImage](myimage.png){.align-center}
![myImage](myimage.png){.align-right}
![myImage](myimage.png){.align-left}
```

