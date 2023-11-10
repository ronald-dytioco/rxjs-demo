import { Observable } from 'rxjs';
import { TActivity } from "./lib/types/activity";
import "./style.css";
import jQuery from "jquery";
import activityView from './lib/activity';

const $ = jQuery;

const apiRoute = "https://www.boredapi.com/api/activity";

const obs$ = new Observable<Promise<TActivity>>((obs) => {
    obs.next(fetch(apiRoute).then((res) => res.json()));
});

$(() => {
    const button = $("#button");

    button.on("click", () => {
        console.log("clicked");

        obs$.subscribe((data) => {
            data.then(res =>
                activityView(res)
            );
        });
    });
});

