

$(function () {
    $("#draggable1")
        .draggable({ revert: "invalid" })
        .resizable({
            animate: true,
            containment: "#container",
            helper: "ui-resizable-helper",
            maxHeight: 300,
            maxWidth: 300,
            minHeight: 50,
            minWidth: 50,
            //aspectRatio: 16 / 9,
            grid: 50,
            alsoResize: "#droppable"
        });
    $("#droppable").resizable();
});

$(function () {
    $("#droppable").droppable({
        drop: function (event, uri) {
            $(this).addClass("uri-state-highlight")
            .find("p").html("Dropped!");
        }
    });
});

$(function () {
    var $start_counter = $("#event-start"),
      $drag_counter = $("#event-drag"),
      $stop_counter = $("#event-stop"),
      counts = [0, 0, 0];

    $("#draggable").draggable({
        start: function () {
            counts[0]++;
            updateCounterStatus($start_counter, counts[0]);
        },
        drag: function () {
            counts[1]++;
            updateCounterStatus($drag_counter, counts[1]);
        },
        stop: function () {
            counts[2]++;
            updateCounterStatus($stop_counter, counts[2]);
        }
    });

    function updateCounterStatus($event_counter, new_count) {
        // first update the status visually...
        if (!$event_counter.hasClass("ui-state-hover")) {
            $event_counter.addClass("ui-state-hover")
              .siblings().removeClass("ui-state-hover");
        }
        // ...then update the numbers
        $("span.count", $event_counter).text(new_count);
    }
});

//$(function () {
//    $("#selectable").selectable({
//        stop: function () {
//            result = $("#selectResult").empty();
//            $(".ui-selected", this).each(function () {
//                index = $("#selectable li").index(this);
//                result.append(" #" + (index + 1));
//            });
//        }
//    });
//});

$(function () {
    $("#selectable").sortable({ placeholder: "ui-state-highlight" });
    $("#selectable").disableSelection();
});

$(function () {
    $("#accordion").accordion({ collapsible: true });
});

$(function () {
    $("#datePicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
    });
    $("#anim").on("change", function () {
        $("#datePicker").datepicker("option", "showAnim", $(this).val());
    })
});

$(function () {

});