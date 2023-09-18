# Competitions
informations on competitions and how to participate.

![competition_cv.png](/competitions/competition_cv.png)

Cryptovoxels often hosts competitions to bring the community together and allow builders display their creativity to the rest of world. At Cryptovoxels we also seek to reward creativity!

## [September '21] Scripting competition: Games!

### What is the goal?
The end goal of the competition is to make the world more interactive and more fun!

### When is it?
The competition is in September 2021 with the due date being the 16th of September

### What do I win?
|Place|Reward|
|----|----|
|First Place| A relatively large parcel and 0.2 eth|
|Second Place| A parcel and 0.1 eth |
|Third Place| A parcel and 0.1 eth |

### How do I win?
|Place|How to win|
|----|----|
|First Place| Have the best working game using scripting, best parcel interactivity, best parcel design and environment. Complexity is encouraged but not necessary.  |
|Second Place| Have the second best working game using scripting and second best parcel interactivity |
|Third Place| Third best parcel interactivity |

### How do I join?
This competition is now closed :( 

If you do not own a parcel, it's ok! Since just recently **spaces can now have scripts!**, just submit one space before the due date. **Note**: "the grid" or the hosted service for multiplayer scripting is not supported in spaces, but don't let that stop you!

### What are the rules?

- Your entry must abide to the Cryptovoxels [rules and terms and conditions](https://www.cryptovoxels.com/terms), and must follow the [community guidelines](https://www.cryptovoxels.com/conduct).

- You may not plagiarise anyone else's work and you may not claim someone else's work as yours unless given the appropriate permission.

- You may submit one and only one parcel or space as an entry.

When judging entries, we will grade entries in favor of those respectful of their parcel boundaries and neighbors.

### Who do I contact for help?
The [Scripting Support](https://support.cryptovoxels.com/c/scripting-help/7) category is your best bet in terms of support. You can also ask for help in the `#player-help` channel of the [Cryptovoxels discord](https://discord.gg/TqsSGVtSba).


## Who will judge?

The panel of judge will be Admin `Fayelure` and 3 more users known by the community. The identity of which will remain secret until the scoring is done.

## What is Cryptovoxels?
### What is Cryptovoxels?
Cryptovoxels is a user-owned world that runs on the Ethereum blockchain. Player can buy/sell their own plots of land and can interact with each others in the world.

### What is Scripting?
Scripting refers to the automation of tasks using a programming language. In Cryptovoxels you can script using JavaScript (JS) in-world. This way players can make doors, animations and games!

Here is an example script for a door that opens and closes:

```js
let closed = true

feature.on('click',e => {
  if(closed) {
      feature.rotation.y=0
  } else {
      feature.rotation.y=Math.PI / 2
  }
  
  closed=!closed
})

```

By default your scripts run locally in the users browser, but with a single click, you can run your scripts on our `grid` server, and enable multiplayer games.