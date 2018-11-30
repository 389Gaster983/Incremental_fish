var spear_fishing = {
    internal: "spear_fishing",

    purchased: {
        price: 1250,
        buttons: [
            {
                resource: resources.bait.crustaceans,
                parent: "bait"
            },
            {
                resource: resources.tackle.squid,
                parent: "bait"
            },
            {
                resource: resources.tackle.harpoon,
                parent: "tackle"
            }
        ]
    },

    initialize() {
        main.switch_area(this);

        this.state = new fishing.state([
            resources.fish.lobster,
            resources.fish.grouper,
            resources.fish.tuna,
            resources.fish.swordfish,
            resources.fish.tiger_shark,
        ]);
    },

    update() {
        fishing.update(this.state);
    },

    unload() {
        fishing.unload(this.state);
    }
}