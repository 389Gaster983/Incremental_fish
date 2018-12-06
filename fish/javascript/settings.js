var settings = {
    keys: ["count", "total", "caught", "purchased", "show_max", "auto_buy", "area"],

    toggle_dev_tools(set) {
        if (set) {
            this.dev = true;

            let parent = $("#right")
                .hide()
                .fadeIn();
            
            $("<button>")
                .text("Money +5,000")
                .click(function() {
                    resources.money.count += 5000;
                    counters.update();
                })
                .appendTo(parent);
            $("<button>")
                .text("Max bait")
                .click(function() {
                    $("#bait_counters")
                        .fadeIn();
                    settings.max(resources.bait);
                })
                .appendTo(parent);
            $("<button>")
                .text("Max tackle")
                .click(function() {
                    $(".tackle")
                        .fadeIn();
                    settings.max(resources.tackle);
                })
                .appendTo(parent);
            $("<button>")
                .text("Max fuel")
                .click(function() {
                    resources.fuel.count = 30;
                    counters.update();
                })
                .appendTo(parent);
            $("<button>")
                .text("Fast ticks")
                .click(function() {
                    main.update_interval(150);
                })
                .appendTo(parent);
            $("<button>")
                .text("Regular ticks")
                .click(function() {
                    main.update_interval(2500);
                })
                .appendTo(parent);
        } else {
            this.dev = false;
            $("#right")
                .empty();
        }
    },

    max(resource) {
        for (let index in resource) {
            let item = resource[index];
            item.count = item.max;
            $("#" + item.internal)
                .fadeIn();
        }
        counters.update();
    },

    save_game() {
        let save = {};

        let save_resources = {};
        for (let section in resources) {
            let results = {};

            let parent = resources[section];

            if (section == "money" || section == "fuel") {
                if (parent.count > 0) {
                    results.count = parent.count;
                }
                if (parent.total > 0) {
                    results.total = parent.total;
                }

                if (section == "fuel") {
                    for (let key of this.keys) {
                        let value = parent[key];
                        if (value != null) {
                            results[key] = value;
                        }
                    }
                }
            }

            if (section == "bait" || section == "tackle" || section == "fish") {
                for (let id in parent) {
                    let values = {};
                    for (let key of this.keys) {
                        let value = parent[id][key];
                        if (value != null) {
                            values[key] = value;
                        }
                    }
                    results[id] = values;
                }
            }

            save_resources[section] = results;
        }
        save["resources"] = save_resources;

        let save_areas = {};
        for (let area in areas.list) {
            let results = {};

            let item = areas.list[area];

            if (area == "lake") {
                if (lake.show_buttons != null && lake.show_buttons) {
                    results.show_buttons = true;
                }
            }
            if (area == "river") {
                if (river.queue_change || !river.river_troll) {
                    results.river_troll = true;
                }
            }

            if (item.unlocked != null && item.unlocked) {
                results.unlocked = true;
            }
            if (areas.current_area != null && areas.current_area.internal == area) {
                results.current = true;
            }

            save_areas[area] = results;
        }
        save["areas"] = save_areas;

        let save_shop = {};
        for (let button in shop.buttons) {
            let results = {};

            let item = shop.buttons[button];
            if (item.removed != null && item.removed) {
                results.removed = true;
            }

            save_shop[button] = results;
        }
        save["shop"] = save_shop;

        let save_boat = {};
        for (let part in boat.parts) {
            let results = {};
            
            let item = boat.parts[part];
            if (item.purchased != null && item.purchased) {
                results.purchased = item.purchased;
            }

            save_boat[part] = results;
        }
        save["boat"] = save_boat;

        let save_misc = {};
        save_misc["messages"] = messenger.lines;
        
        if (!lights.lights) {
            save_misc["theme"] = true;
        }

        if (this.dev) {
            save_misc["dev_tools"] = true;
        }
        save["misc"] = save_misc;

        let clear = (parent) => {
            for (let child in parent) {
                if (!parent[child] || typeof parent[child] != "object") {
                    continue;
                }
            
                clear(parent[child]);
                if (Object.keys(parent[child]).length == 0) {
                    delete parent[child];
                }
            }
        }
        clear(save);

        localStorage.removeItem("save");
        localStorage.setItem("save", JSON.stringify($.extend({}, save)));
    },

    load_save() {
        let save = JSON.parse(localStorage.getItem("save"));

        main.reset(save);

        for (let index in save) {
            let parent = save[index];
            if (index == "resources") {
                for (let child in parent) {
                    let value = parent[child];

                    if (child == "money" || child == "fuel") {
                        if (value.count != null) {
                            resources[child].count = value.count;
                        }
                        if (value.total != null) {
                            resources[child].total = value.total;
                        }

                        if (child == "fuel") {
                            for (let key of this.keys) {
                                if (value[key] != null) {
                                    resources.fuel[key] = value[key];
                                }
                            }
                        }
                    }

                    if (child == "bait" || child == "tackle" || child == "fish") {
                        for (let item in value) {
                            for (let key of this.keys) {
                                let final = value[item][key];
                                if (final != null) {
                                    resources[child][item][key] = value[item][key];
                                }
                            }
                        }
                    }
                }
            }

            if (index == "areas") {
                for (let child in parent) {
                    let item = parent[child];

                    if (child == "lake") {
                        if (item.show_buttons != null && item.show_buttons) {
                            lake.show_buttons = item.show_buttons;
                        }
                    }
                    if (child == "river") {
                        if (item.river_troll != null && item.river_troll) {
                            river.queue_change = true;
                        }
                    }

                    if (item.current != null && item.current) {
                        areas.switch_area(window[child]);
                    }
                    if (item.unlocked != null && item.unlocked) {
                        areas.set_unlocked(child);

                        if (child == "pier") {
                            boat.initialize();
                        }
                    }
                }
            }

            if (index == "shop") {
                for (let child in parent) {
                    let item = parent[child];

                    if (item.removed != null && item.removed) {
                        shop.buttons[child].removed = item.removed;
                    }
                }
            }

            if (index == "boat") {
                for (let child in parent) {
                    let item = parent[child];

                    if (item.purchased != null && item.purchased) {
                        boat.add_part(boat.parts[child])
                    }
                }
            }

            if (index == "misc") {
                for (let child in parent) {
                    let item = parent[child];

                    if (child == "messages") {
                        if (item != null) {
                            for (let message of item.reverse()) {
                                messenger.write_message(message, false);
                            }
                        }
                    }

                    if (child == "theme") {
                        if (item != null && item) {
                            lights.off();
                        }
                    }

                    if (child == "dev_tools") {
                        if (item != null && item) {
                            $("#right")
                                .empty();
                            this.toggle_dev_tools(true);
                        }
                    }
                }
            }
        }

        counters.load(save);
        messenger.reset();
        if (!lights.lights) {
            lights.on();
        }
        shop.update();
        main.update_interval(2500);
    },
    
    delete_save() {
        localStorage.removeItem("save");
    }
}