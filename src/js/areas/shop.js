class shop {
    static initialize() {
        // Disable the area selector button
        $("#shop-selector-button")
            .prop("disabled", true);
        // Enable the previously disabled area selector button
        $("#" + fishing.data.internal + "-selector-button")
            .prop("disabled", false);
        // Remove fishing data as the shop isn't a fishing area
        fishing.data = null;

        // Fade out resource buttons
        $("#resource-buttons")
            .fadeOut(400, () => {
                // Load shop CSS
                css.load(["areas/shop"]);

                // Load shop art
                const art = $("#area-art")
                    .html(art_data.get("shop", "background"))
                    .hide()
                    .fadeIn();
        
                // Create the fishing license clickable
                const license = $("<div>")
                    .attr("id", "area-license")
                    .addClass("art")
                    .html(art_data.get("shop", "license"))
                    .appendTo(art);
                $("<div>")
                    .attr("id", "area-license-decor")
                    .addClass("art")
                    .text(art_data.get("shop", "license-decor"))
                    .appendTo(license);

                const data = fishing_data.get_data();

                // Create bait clickables
                const bait_parent = $("<div>")
                    .attr("id", "bait-item-holder")
                    .addClass("art")
                    .appendTo(art);

                for (const internal in data.bait) {
                    const bait = data.bait[internal];

                    // Create the bait jars
                    const bait_art = $("<div>")
                        .addClass("shop-item flex flex-justify-center")
                        .text(art_data.get("shop", "jar"))
                        // Tooltip show/hide
                        .hover(() => {
                            $("#" + bait.internal + "-tooltip")
                                .stop()
                                .fadeIn();
                        }, () => {
                            $("#" + bait.internal + "-tooltip")
                                .stop()
                                .fadeOut();
                        })
                        .appendTo(bait_parent);
                    // Overlay the bait art
                    $("<div>")
                        .attr("id", bait.internal + "-decor")
                        .addClass("bait-decor")
                        .html(art_data.get("shop", bait.internal + "-decor"))
                        .appendTo(bait_art);
                    // Create the tooltip element
                    $("<div>")
                        .attr("id", bait.internal + "-tooltip")
                        .addClass("bait-tooltip")
                        .text(bait.display + " ($" + bait.price + ")")
                        .hide()
                        .appendTo(bait_art);
                }

                // Create tackle clickables
                const tackle_parent = $("<div>")
                    .attr("id", "tackle-item-holder")
                    .addClass("art")
                    .appendTo(art);

                for (const internal in data.tackle) {
                    const tackle = data.tackle[internal];

                    // Create the tackle hooks
                    const tackle_art = $("<div>")
                        .addClass("shop-item flex flex-justify-center tackle-hook")
                        .text(art_data.get("shop", "hook"))
                        .hover(() => {
                            $("#" + tackle.internal + "-tooltip")
                            .stop()
                            .fadeIn();
                        }, () => {
                            $("#" + tackle.internal + "-tooltip")
                            .stop()
                            .fadeOut();
                        })
                        .appendTo(tackle_parent);
                    
                    // Overlay the tackle art
                    $("<div>")
                        .attr("id", tackle.internal + "-decor")
                        .addClass("tackle-decor")
                        .html(art_data.get("shop", tackle.internal + "-decor"))
                        .appendTo(tackle_art);
                    // Create the tooltip element
                    $("<div>")
                        .attr("id", tackle.internal + "-tooltip")
                        .addClass("tackle-tooltip")
                        .text(tackle.display + " ($" + tackle.price + ")")
                        .hide()
                        .appendTo(tackle_art);
                }
            });
    }
}