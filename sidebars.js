/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'doc',
      id: 'home',
      label: '🏠 Home',
    },
    {
      type: 'doc',
      id: 'voxel-library',
      label: '📚 Voxel Library',
    },
    {
      type: 'doc',
      id: 'features/submit-library',
      label: '📥 Submit to Library',
    },
    {
      type: 'doc',
      id: 'virtual-reality',
      label: '🥽 Virtual Reality',
    },
    {
      type: 'doc',
      id: 'The-world/The-world',
      label: '🌐 The world',
    },
    {
      type: 'doc',
      id: 'admin/todos',
      label: '☑️ To Do',
    },
    {
      type: "category",
      label: "📦 Parcels",
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        slug: "Parcels",
      },
      items: [
        {
          type: 'doc',
          id: 'Parcels/Buy-a-parcel',
          label: '🛒 Buy a parcel',
        },
        {
          type: 'doc',
          id: 'Parcels/Building',
          label: '🏗️ How to build',
        },
        {
          type: 'doc',
          id: 'Parcels/light-map',
          label: '🏮 Light-mapping',
        },
        {
          type: 'doc',
          id: 'features/features-documents',
          label: '📋 List of Features',
        },
        {
          type: 'doc',
          id: 'Parcels/Make-Vox-Model',
          label: '🧱 Make Vox Model',
        },
        {
          type: 'doc',
          id: 'Spaces/Spaces',
          label: '🏰 Spaces',
        },
      ],
    },
    {
      type: "category",
      label: "⛹ Players",
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        slug: "Players",
      },
      items: [
        {
          type: 'doc',
          id: 'Player_customization/Player_customization',
          label: 'Customization',
        },
        {
          type: 'doc',
          id: 'Player_customization/Create_a_wearable',
          label: 'Make a wearable',
        },
        {
          type: 'doc',
          id: 'Player_customization/Buy-a-Wearable',
          label: 'Buy a Wearable',
        },
        {
          type: 'doc',
          id: 'Player_customization/Username',
          label: 'Username',
        },
        {
          type: 'doc',
          id: 'Player_customization/key-controls',
          label: 'Key bindings',
        },
        {
          type: 'doc',
          id: 'Player_customization/Costume_tab',
          label: 'Edit costume',
        },
        {
          type: 'doc',
          id: 'Player_customization/Avatar_skin',
          label: 'Edit skin',
        },
      ],
    },
    {
      type: "category",
      label: "🧑‍💻 Scripting",
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        slug: "Scripting",
      },
      items: [
        {
          type: 'doc',
          id: 'Scripting/Scripting-Documentation',
          label: 'Scripting Documentation',
        },
        {
          type: 'doc',
          id: 'Scripting/Examples/Examples',
          label: 'Scripting examples',
        },
        {
          type: 'doc',
          id: 'Scripting/all-features-scripting-properties',
          label: 'Feature scripting cheatsheet',
        },
        {
          type: 'doc',
          id: 'Scripting/TheGrid',
          label: 'The grid',
        },
        {
          type: 'doc',
          id: 'Scripting/Animation-API',
          label: 'Animation API',
        },
        {
          type: 'doc',
          id: 'External-API',
          label: 'Data API',
        },
        {
          type: "category",
          label: "Examples",
          collapsed: true,
          collapsible: true,
          items: [{ type: "autogenerated", dirName: "Scripting/Examples" }],
          link: {
            type: 'generated-index',
            slug: "Examples",
          },
        },
      ],
    },
    {
      type: "category",
      label: "📋 Features",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "features" }],
      link: {
        type: 'generated-index',
        slug: "Features",
      },
    },
  ],
  tutorial: [
    {
      type: 'doc',
      id: 'tutorial/index_1',
      label: 'Voxels Wiki From Raiden INST',
    },
    {
      type: 'doc',
      id: 'tutorial/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'tutorial/RaidenINST',
      label: 'Raiden INST in Voxels',
    },
    {
      type: "category",
      label: "Official Tutorial",
      collapsed: false,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "Scripting/Examples" }],
    },
  ],
};

module.exports = sidebars;
