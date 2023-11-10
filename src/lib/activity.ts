import jQuery from "jquery";
import { TActivity } from "./types/activity";

const $ = jQuery;

export default function activityView(act: TActivity) {
    // null guard
    if (!act) return console.log("No activity")

    console.log(act);

    const [list, activity, type, participants, price, link, key, accessibility] = [
        $("#activity-list"),
        $("#act-list-activity"),
        $("#act-list-type"),
        $("#act-list-participants"),
        $("#act-list-price"),
        $("#act-list-link"),
        $("#act-list-key"),
        $("#act-list-accessibility"),
    ];

    activity.html('<strong>Activity: </strong>' + act.activity);
    type.html('<strong>Type: </strong>' + act.type);
    participants.html('<strong>Participants: </strong>' + act.participants);
    price.html('<strong>Price: </strong>' + act.price);
    link.html('<strong>Link: </strong>' + (act.link || 'No link'));
    key.html('<strong>Key: </strong>' + act.key);
    accessibility.html('<strong>Accessibility: </strong>' + act.accessibility);

    list.css("display", "block")
}
