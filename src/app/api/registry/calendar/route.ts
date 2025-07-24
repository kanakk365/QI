import { NextResponse } from 'next/server';

export async function GET() {
  const component = {
    type: "registry:component",
    name: "calendar",
    description: "A beautiful full-screen calendar component with event management and responsive design.",
    files: [
      {
        type: "registry:file",
        name: "components/ui/calendar.tsx",
        content: `"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/src/lib/utils"
import { buttonVariants } from "@/src/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }`
      },
      {
        type: "registry:file",
        name: "components/ui/full-screen-calendar.tsx",
        content: `"use client"

import React, { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isEqual } from "date-fns"
import { Calendar } from "@/src/components/ui/calendar"

interface Event {
  id: number
  name: string
  time: string
  datetime: string
}

interface CalendarData {
  day: Date
  events: Event[]
}

interface FullScreenCalendarProps {
  data?: CalendarData[]
}

export function FullScreenCalendar({ data = [] }: FullScreenCalendarProps) {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  const firstDayCurrentMonth = startOfMonth(currentMonth)
  const lastDayCurrentMonth = endOfMonth(currentMonth)

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: lastDayCurrentMonth,
  })

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex items-center space-x-2">
            <Calendar
              mode="single"
              selected={selectedDay}
              onSelect={(day) => day && setSelectedDay(day)}
              className="rounded-md border"
            />
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-7 gap-0">
          <div className="hidden lg:block border-r">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                {format(selectedDay, "MMMM yyyy")}
              </h2>
              <div className="space-y-2">
                {data
                  .filter((date) => isSameDay(date.day, selectedDay))
                  .map((date) => (
                    <div key={date.day.toString()} className="space-y-1.5">
                      {date.events.slice(0, 1).map((event) => (
                        <div
                          key={event.id}
                          className="flex flex-col items-start gap-1 rounded-lg border bg-muted/50 p-2 text-xs leading-tight"
                        >
                          <p className="font-medium leading-none">{event.name}</p>
                          <p className="leading-none text-muted-foreground">{event.time}</p>
                        </div>
                      ))}
                      {date.events.length > 1 && (
                        <div className="text-xs text-muted-foreground">+ {date.events.length - 1} more</div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="isolate grid w-full grid-cols-7 grid-rows-5 border-x lg:hidden">
            {days.map((day, dayIdx) => (
              <button
                onClick={() => setSelectedDay(day)}
                key={dayIdx}
                type="button"
                className={cn(
                  isEqual(day, selectedDay) && "text-primary-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-foreground",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-muted-foreground",
                  (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                  "flex h-14 flex-col border-b border-r px-3 py-2 hover:bg-muted focus:z-10",
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={cn(
                    "ml-auto flex size-6 items-center justify-center rounded-full",
                    isEqual(day, selectedDay) && isToday(day) && "bg-primary text-primary-foreground",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-primary text-primary-foreground",
                  )}
                >
                  {format(day, "d")}
                </time>
                {data.filter((date) => isSameDay(date.day, day)).length > 0 && (
                  <div>
                    {data
                      .filter((date) => isSameDay(date.day, day))
                      .map((date) => (
                        <div key={date.day.toString()} className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                          {date.events.map((event) => (
                            <span key={event.id} className="mx-0.5 mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}`
      }
    ],
    dependencies: ["react-day-picker", "date-fns", "lucide-react"],
    devDependencies: ["@types/react"],
    registryDependencies: ["button"]
  };

  return NextResponse.json(component);
} 