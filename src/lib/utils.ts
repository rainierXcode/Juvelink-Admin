import { twMerge } from "tailwind-merge";
import { addDays, startOfDay, getDay } from "date-fns";


export function cn(...classes: (string | false | null | undefined)[]) {
    return twMerge(classes.filter(Boolean).join(" "));
  }


export function getAvailableVisitationDays () {
        const startDate = startOfDay(new Date());
        const endDate =  addDays(startDate, 45);

        const days =  [];

        let currentDate = startDate;

        while(currentDate <= endDate){
            const dayOfWeek = getDay(currentDate);

            if(dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5 ){
                days.push(currentDate);
            }

            currentDate = addDays(currentDate, 1);
        }

        return days;
    }