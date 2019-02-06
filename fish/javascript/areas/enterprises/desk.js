var desk = {
    initialize() {
        main.remove_elements(["office_section"]);

        let parent = $("<div>")
            .attr("id", "desk_section")
            .appendTo($(".left"));
        $("<div>")
            .attr("id", "desk_art")
            .addClass("pre")
            .html("  _______________________________________________________________________________________________________________________________<br>"
                + " /  ___________________________________________________________________________________________________________________________  \\<br>"
                + "/  /                                                                                                                           \\  \\<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "| |                                                                                                                             | |<br>"
                + "\\  \\___________________________________________________________________________________________________________________________/  /<br>"
                + " \\_______________________________________________________________________________________________________________________________/")
            .appendTo(parent);

        // header
        $("<div>")
            .attr("id", "office_button_section")
            .addClass("desk_section absolute")
            .appendTo(parent);
        buttons.create({
            parent: "office_button_section",
            id: "office",
            text: "Back to your office",
            on_click: function() {
                office.initialize();
            }
        });
        let header = $("<div>")
            .attr("id", "balance_header")
            .addClass("desk_section centered bold absolute")
            .text("Balance")
            .appendTo(parent);
        $("<div>")
            .addClass("divider")
            .appendTo(header);
        let money = $("<span>")
            .attr("id", "balance_counter")
            .addClass("desk_section centered absolute")
            .text("$")
            .appendTo(parent);
        $("<span>")
            .attr("id", "money_count")
            .text("0")
            .appendTo(money);
        $("<span>")
            .attr("id", "money_difference")
            .appendTo(money);

        // designer
        let designer_section = $("<div>")
            .attr("id", "designer_section")
            .addClass("desk_section pointer absolute")
            .hide()
            .appendTo(parent);
        $("<div>")
            .attr("id", "designer_art")
            .addClass("pre absolute")
            .html("  ___________________________________<br>"
                + " /                                   \\<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + "|                                     |<br>"
                + " \\___________________________________/")
            .appendTo(designer_section);
        let designer_content = $("<div>")
            .attr("id", "designer_content")
            .addClass("centered absolute")
            .appendTo(designer_section);
        let designer_header = $("<div>")
            .attr("id", "designer_header")
            .addClass("bold")
            .text("Research Update Card")
            .appendTo(designer_content);
        $("<div>")
            .addClass("divider")
            .appendTo(designer_header);
        $("<div>")
            .attr("id", "designer_text")
            .html("Hey boss, we finished that 'designer' project you wanted us to work on. Come on down to the lab any time and we'll set you up designing your own fish!<br><br>"
                + "- Tim, Research Department<br><br>"
                + "<>< <>< <><")
            .appendTo(designer_content);

        // research
        let research_section = $("<div>")
            .attr("id", "research_section")
            .attr("display", "Research")
            .addClass("desk_section before absolute")
            .hide()
            .appendTo(parent);
        let research_points = $("<div>")
            .attr("id", "research_points")
            .addClass("centered")
            .text("Research Points")
            .appendTo(research_section);
        $("<span>")
            .attr("id", "research_points_per_second")
            .text(" (0/s): ")
            .appendTo(research_points);
        $("<span>")
            .attr("id", "research_points_count")
            .text(resources.research_points.count)
            .appendTo(research_points);
        let research_header = $("<div>")
            .attr("id", "research_header")
            .addClass("centered bold absolute")
            .text("Projects")
            .appendTo(research_section);
        $("<div>")
            .addClass("divider")
            .appendTo(research_header);
        $("<div>")
            .attr("id", "research_content")
            .appendTo(research_section);

        let progress_function = (parent) => {
            $(parent)
                .css("background-color", "transparent");

            let element = $("<div>")
                .attr("progress", 3)
                .addClass("progress absolute")
                .css("top", $(parent).position().top + 6)
                .css("left", $(parent).position().left + 6)
                .appendTo($(parent));
            $(element)
                .animate(
                    { "width": "295px" },
                    $(element).attr("progress") * 1000,
                    "linear",
                    function() {
                        buttons.remove($(parent).attr("id").replace("_button", ""), enterprises.update_research);
                    }
                );
        }
        vendor.add_item(enterprises.research_vendor, {
            data: {
                parent: "research_content",
                id: "designer_research",
                classes: ["enterprise_investment absolute"],
                text: "hello test",
                on_click: function() {
                    progress_function($(this));
                }
            }
        });
        vendor.update(enterprises.research_vendor);

        // investments
        $("<div>")
            .attr("id", "enterprise_investments_section")
            .attr("display", "Investments")
            .addClass("desk_section before absolute")
            .appendTo(parent);
        vendor.add_item(enterprises.vendor, {
            data: {
                parent: "enterprise_investments_section",
                id: "newspaper_unlock",
                classes: ["enterprise_investment"],
                header: {
                    bold: "Newspaper Promotion",
                    regular: "(Free!)"
                },
                text: "A local newspaper bulletin is running a campaign to get more readers. For you that means free papers!",
                on_click: function() {
                    $("#newspaper_section")
                        .fadeIn();
                    vendor.remove_item(enterprises.vendor, "newspaper_unlock", enterprises.check_empty);
                }
            }
        });
        vendor.add_item(enterprises.vendor, {
            data: {
                parent: "enterprise_investments_section",
                id: "designer_unlock",
                classes: ["enterprise_investment"],
                header: {
                    bold: "Designer Unlock",
                    regular: ""
                },
                text: "Unlock the designer section.",
                on_click: function() {
                    $("#designer_section")
                        .fadeIn();
                    vendor.remove_item(enterprises.vendor, "designer_unlock", enterprises.check_empty);
                }
            }
        });
        vendor.add_item(enterprises.vendor, {
            data: {
                parent: "enterprise_investments_section",
                id: "stocks_unlock",
                classes: ["enterprise_investment"],
                header: {
                    bold: "Stocks Unlock",
                    regular: ""
                },
                text: "Unlock the stocks section.",
                on_click: function() {
                    $("#stocks_section")
                        .fadeIn();
                    vendor.remove_item(enterprises.vendor, "stocks_unlock", enterprises.check_empty);
                }
            }
        });
        vendor.add_item(enterprises.vendor, {
            data: {
                parent: "enterprise_investments_section",
                id: "research_unlock",
                classes: ["enterprise_investment"],
                header: {
                    bold: "Research Unlock",
                    regular: ""
                },
                text: "Unlock the research section.",
                on_click: function() {
                    $("#research_section")
                        .fadeIn();
                    vendor.remove_item(enterprises.vendor, "research_unlock", enterprises.check_empty);
                }
            }
        });
        vendor.update(enterprises.vendor);

        // payroll
        let payroll_section = $("<div>")
            .attr("id", "payroll_section")
            .attr("display", "Payroll & Workers")
            .addClass("desk_section before absolute")
            .appendTo(parent);
        let payroll_content = $("<div>")
            .attr("id", "payroll_content")
            .addClass("absolute")
            .appendTo(payroll_section);
        let payroll_header = $("<div>")
            .attr("id", "payroll_header")
            .addClass("centered bold payroll_margin")
            .text("Payroll Overview")
            .appendTo(payroll_content);
        $("<div>")
            .addClass("divider")
            .appendTo(payroll_header);
        let payroll_sales = $("<div>")
            .text("Sales: ")
            .appendTo(payroll_content);
        $("<span>")
            .text("0%")
            .appendTo(payroll_sales);
        let payroll_workers = $("<div>")
            .text("Workers: ")
            .appendTo(payroll_content);
        $("<span>")
            .text("0%")
            .appendTo(payroll_workers);
        let payroll_marketing = $("<div>")
            .text("Marketing: ")
            .appendTo(payroll_content);
        $("<span>")
            .text("0%")
            .appendTo(payroll_marketing);
        let payroll_transportation = $("<div>")
            .addClass("payroll_margin")
            .text("Transportation: ")
            .appendTo(payroll_content);
        $("<span>")
            .text("0%")
            .appendTo(payroll_transportation);
        $("<div>")
            .addClass("divider")
            .appendTo(payroll_content);
        buttons.create({
            parent: "payroll_section",
            id: "payroll_edit",
            classes: ["payroll_button absolute"],
            text: "Edit Payroll",
            breaks: 0
        });
        buttons.create({
            parent: "payroll_section",
            classes: ["payroll_button absolute"],
            id: "worker_edit",
            text: "Edit Workers",
            breaks: 0
        });

        // newspaper
        let newspaper_section = $("<div>")
            .attr("id", "newspaper_section")
            .addClass("desk_section absolute")
            .hide()
            .appendTo(parent);
        $("<div>")
            .attr("id", "newspaper_art")
            .addClass("pre")
            .html("     _________________________________<br>"
                + "    /                                 \\<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + "   |                                   |<br>"
                + " __|                                   |<br>"
                + "/  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|  |                                   |<br>"
                + "|__|___________________________________|<br>"
                + "(______________________________________)")
            .appendTo(newspaper_section);
        let newspaper_content = $("<div>")
            .attr("id", "newspaper_content")
            .addClass("absolute")
            .appendTo(newspaper_section);
        let newspaper_header = $("<div>")
            .attr("id", "newspaper_header")
            .addClass("centered bold")
            .text("~~~ The Miami Bulletin ~~~")
            .appendTo(newspaper_content);
        $("<div>")
            .addClass("divider")
            .appendTo(newspaper_header);
        $("<div>")
            .attr("id", "insignificant_news_section")
            .addClass("absolute block")
            .appendTo(newspaper_content);
        $("<div>")
            .attr("id", "significant_news_section")
            .addClass("absolute block")
            .appendTo(newspaper_content);
        $("<div>")
            .attr("id", "news_divider")
            .addClass("absolute")
            .appendTo(newspaper_content);

        // stocks
        let stocks_section = $("<div>")
            .attr("id", "stocks_section")
            .attr("display", "Stocks")
            .addClass("desk_section before absolute")
            .hide()
            .appendTo(parent);
        let stocks_content = $("<div>")
            .attr("id", "stocks_content")
            .addClass("absolute")
            .appendTo(stocks_section);
        let stocks_header = $("<div>")
            .addClass("centered bold")
            .text("Highest Grossing Stocks")
            .appendTo(stocks_content);
        $("<div>")
            .addClass("divider")
            .appendTo(stocks_header);
        $("<div>")
            .attr("id", "stocks_display")
            .addClass("absolute")
            .appendTo(stocks_content);
        buttons.create({
            parent: "stocks_section",
            id: "view_portfolio",
            classes: ["absolute"],
            text: "View Your Portfolio",
            breaks: 0
        });
        stocks.update_display();
    },

    update_research() {
        desk.check_empty();
    },

    check_empty() {
        let investments = $("#enterprise_investments_section");
        if (investments.children().length == 0) {
            $("<div>")
                .attr("id", "no_investments")
                .addClass("centered")
                .text("No investments available!")
                .appendTo(investments);
        }

        let research = $("#research_content");
        if (research.children().length == 0) {
            $("<div>")
                .attr("id", "no_projects")
                .addClass("centered")
                .text("No projects available!")
                .appendTo(research);
        }
    }
}