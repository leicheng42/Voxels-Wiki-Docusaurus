# Versioning and deprecations
Describes how CryptoVoxels versioning and deprecations works

## Versioning and deprecations

### Versioning

The versioning of CryptoVoxels might seem a bit weird if you are used to other softwares systems. The version looks like `5.6.2`.

`5.x.x` is the major version number and is changed whenever Ben thinks it's a time to, maybe once or twice per year.

`x.6.x` is the minor version number and is increased every day there is a release done. 

`x.x.2` is the patch version number and is increased for every release that is created on the same day.

### Deprecations

#### Features

Feature data contains a reference to which version they were last changed by the owner. This version is used by the devs to migrate and deprecate feature functionality without changing the current data and having to change/migrate all the data in one step. This can be thought of as a [feature flag](https://martinfowler.com/articles/feature-toggles.html) triggered by the version.
 