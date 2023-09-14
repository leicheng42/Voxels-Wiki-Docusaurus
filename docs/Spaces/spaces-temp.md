# What is a space?
Spaces are free plots of land off-grid. They are building volumes similar to [parcels](/docs/Parcels/Building) and are an excellent way to test the building tools of Cryptovoxels. 
You can also [convert a space into a parcel and vice versa](#converting-space-to-parcel), making experimenting easy.

![blankspaces.png](/spaces/blankspaces.png)

## What can I do in a space?
Everything you can do in a [parcel](/docs/Parcels/Building), including [scripting](/docs/Scripting/). Multiplayer is limited to 5 people.
> [Lightmap baking](/docs/Parcels/light-map) is not allowed in spaces yet.
{.is-warning}

## Are spaces free?
Yes, spaces are 100% free and you can have up to 420 spaces per wallet.

## How do I make a space?
On the Cryptovoxels website, click [Spaces](https://www.cryptovoxels.com/account/spaces) on the top.

![spacebutton.png](/spaces/spacebutton.png)

Enter the name and adjust the width/height/depth to your liking, then click **Create!**.

![myspace.png](/spaces/myspacecreate.png)

You will now be on your space's page. Click **Visit** to go to your space.

![visitspacesmallest.png](/spaces/visitspacesmallest.png)

Congrats, you're in your new space! Click [here](/docs/Parcels/Building) to learn how to build.

## How can I see my spaces?
On the Cryptovoxels website, click [Spaces](https://www.cryptovoxels.com/account/spaces) on the top. On the left side, a list of your spaces will appear.
From here you can click **Teleport to** and be sent to the space.

![spaces.png](/spaces/spacessmall.png)

You can get more settings by clicking the space's row.
From here you can view the space's page, download the JSON or erase the space.

![spacesettings.gif](/spaces/spaceadjustments.gif)
You can also just click the name of the space to bring you to its page.

# Space's page
From the space's page, you can change the name, share the space and adjust settings.
To view your space's page, go [here](https://www.cryptovoxels.com/account/spaces), then click the name of the space you want to go to.

![spacename.png](/spaces/spacename.png)

## Editing space's info
On the space's page, click the pen icon to edit the name & description of the space.

![editinfo.png](/spaces/editinfo.png)

## Sharing your space
You can share your space to anyone, and they don't even need to be signed in to enter! For example, [here is our space!](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)

All you have to do is share the unique URL of your Space. It should look something like:
`https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84`

> Multiplayer is limited to 5 people in a space. 
Spaces are also not searchable or browseable. You must know the URL to a space to access it.
{.is-warning}

### Changing your share link (slug)
On your space's page there is a *Space admin* section on the right side - from there you can edit the slug for that space and save it. 
This will generate a shareable link that will make it easy for you to share your space. See the preview underneath for the URL.

![changeslug.gif](/spaces/changeslug.gif)

## Allowing others to edit
Just like a parcel, you can convert your space to a sandbox and make it editable by anyone with the link.
The person editing will need to be signed into Cryptovoxels to make changes. Click [here](https://www.cryptovoxels.com/spaces/4707ddd3-fd1b-4ee1-856b-08284f1ecc11/play) to see/edit our sandbox space.

On your space's page under *Space admin*, click the checkbox for **Is Sandbox** to enable sandbox mode.

![spacesandbox.png](/spaces/spacesandbox.png)

> Sandbox is great for collaboration creation, but if you've finalized the space and are linking it out to the public, you may want to turn sandbox mode off so that your creation does not get negatively altered.
{.is-warning}

## Using build templates
You can use a build template to start off with.
On your space's page, click **Build...**, then select a build material & one of the templates.

![spacebuild.png](/spaces/spacebuild.png)

## Backup your space
Spaces do not automatically take snapshots like parcels do, so you will have to manually backup your space.
Luckily backing up is straightforward, as it just involves saving a JSON file, and there are two ways to do this.

### Method 1
You can backup the space on the space's page. In the *Space admin* section on the right side, click **Download content as JSON**.
Keep your JSON file in a safe place.

![spacebackup1.png](/spaces/spacebackupa.png)

### Method 2
You can also backup from your [list of spaces page](https://www.cryptovoxels.com/account/spaces).
Click the space you want to save, then click **Download Json**.

![spacebackupb.png](/spaces/spacebackupb.png)

## Restore your space
On the space's page you can upload the backed-up JSON file.
In the *Space admin* section on the right side, click **Upload JSON** and select the file.

![spacerestore.png](/spaces/spacerestore.png)

You can also create a new space [here](https://www.cryptovoxels.com/account/spaces) and upload the JSON file afterwards, just make sure the dimensions are the same.

# Converting space to parcel
You can conveniently convert a space to a parcel as long as the height, width & depth are the same.

This is great for experimenting, or if you want to keep your parcel intact while you work on the next parcel iteration secretly, or if you don't have a parcel yet but are planning to get one in the future.

> Features outside parcel feature bounds will be removed.
Imported parcel/space should be of the same size as the in-world parcel.
Features have to have valid types and valid data.
{.is-warning}

### Method 1
On your parcel's page (e.g. cryptovoxels.com/parcels/4661), under *Parcel admin*, click **View/Edit parcel content**.

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

On the *Parcel version management* page, click **Import** on the space you want to use.

![spacetoparcel2b.png](/spaces/spacetoparcel2b.png)

Click **OK** and enjoy your different parcel!

![spacetoparcel4.png](/spaces/spacetoparcel4.png)

### Method 2
On your space's page (e.g. [cryptovoxels.com/spaces/89ba33af](https://www.cryptovoxels.com/spaces/c9cc778b-8326-45c6-932d-aae4a8f06c84)), under *Space admin*, click **Download content as JSON**.
(You can also save the JSON of the space from the spaces list page [here](https://www.cryptovoxels.com/account/spaces).)

![spacebackup1.png](/spaces/spacebackupa.png)

After getting the space's JSON, go to your parcel's page, and under *Parcel admin*, click **View/Edit parcel content**.

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

Click **Choose File** under *Import* and select the JSON of the space, and that's it!

![spacetoparcel3.png](/spaces/spacetoparcel3.png)

# Converting parcel to space
You can seamlessly convert a parcel to a space.

### Method 1

On your parcel's page (e.g. cryptovoxels.com/parcels/1), under *Parcel admin*, click **View/Edit parcel content**.

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

Under *Parcel Versions*, click **Create space** on the version you want to convert (sorted by newest on top).

![spacetoparcel5.png](/spaces/parceltospace1.png)

You should now see your space's page, titled something like *Copy of X of parcel X*.

### Method 2

On your parcel's page, under *Parcel admin*, click **View/Edit parcel content**.

![spacetoparcel1.png](/spaces/spacetoparcel1.png)

Under *Parcel Versions*, click **Download** on the version you want to convert and save the JSON.

![spacetoparcel5.png](/spaces/parceltospace2.png)

Go on your space's page and click **Upload JSON** under *Space admin* and select the JSON file.

![parceltospace3.png](/spaces/parceltospace3b.png)

Enjoy your space!

# Examples of spaces
Below are some great examples of what you can do with a space.

[ZeroPointer's Solar](https://www.cryptovoxels.com/spaces/5f439817-8122-4dbf-8330-913e84600d74)

[uttermelon's Halloween Party](https://www.cryptovoxels.com/spaces/dfee9c8d-6256-469f-896b-8a76ab1be45c)

[CV Underworld](https://www.cryptovoxels.com/spaces/c547f9c7-fa28-4a4e-8cec-4076ded9468a)

[uttermelon's fan art for Mr misang](https://www.cryptovoxels.com/spaces/4d8a4b9b-19e6-408c-b03f-f87567067adc)

[airbag's game](https://www.cryptovoxels.com/spaces/d0a82c2b-e9cd-4c24-93a5-a9d106b4cdfe)

[uttermelon's DEEKAYverse_made](https://www.cryptovoxels.com/spaces/483aa303-bdce-4f98-8a73-5d63e7048098)

[sorryaboutyourcats' fractals for imnotArt](https://www.cryptovoxels.com/spaces/e82c3962-f2e8-4ca1-a30d-703f5f69cdc5)

If you're starting out with Cryptovoxels for the first time and want to make a space, [this guide](https://medium.com/p/759947c7c546) can help.

Have fun creating!
