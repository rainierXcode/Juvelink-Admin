import { DayPicker, DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";

type CalendarProps = DayPickerProps & {
  className?: string;
  classNames?: Record<string, string>;
};

export default function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={true}
      mode="single"
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-2 w-full",
        month_caption: "h-fit text-center w-full text-sm font-bold",
        nav: "absolute w-full flex justify-between left-0 px-3",
        button_next: 'border border-black/10 p-0.5 rounded-sm cursor-pointer',
        button_previous: 'border border-black/10 p-0.5 rounded-sm cursor-pointer',
        weekdays: "rounded-md w-8 font-light text-xs text-black/50",
        weekday: 'py-2',
        month_grid: 'border-separate border-spacing-y-2 border-spacing-x-1',
        disabled: "text-gray-300 pointer-events-none",        
        today: "text-blue-400",
        selected: "!bg-black text-white hover:!bg-black focus:!bg-black",
        outside: "text-gray-400",
        day: "p-0 text-xs font-medium text-center rounded-sm",
        day_button: "size-8 cursor-pointer",
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeft className={cn(className, "w-4 h-4 text-gray-700")} {...props} />;
          }
          return <ChevronRight className={cn(className, "w-4 h-4 text-gray-700")} {...props} />;
        },
      }}
      {...props}
    />
  );
}
