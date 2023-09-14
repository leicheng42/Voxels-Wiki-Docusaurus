# Turn vox to face player

A vox model will pick up the first player in the parcel and turn to follow them.

![turn-to-face.png](/turn-to-face.png)

### How to use

1. Create a vox model
2. Assign a url (sample alien: `https://cdn.discordapp.com/attachments/573736707984457738/733461614107426836/aliem.vox`)
3. Add this script
4. Reload the parcel

### Script

```js
setInterval(() => {
  let p = parcel.getPlayers()[0]
  
  if (!p) {
    return
  }

  let v1 = feature.position
  let v2 = p.position
  let angle = Math.atan2(v1.z - v2.z, v1.x - v2.x)

  feature.rotation.y = Math.PI / -2 - angle
}, 200)
```

### Improvements

Refactor to run at 2hz and use the animation API to smoothly animate between rotations.

> ALL HAIL MATH.ATAN2!