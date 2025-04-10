type AddDaysProps = {
  date: Date;
  daysToAdd: number;
};

export function AddDays({ date, daysToAdd }: AddDaysProps) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd);
  console.log("Clone", clone)
//   console.log("Clone", clone)
  return clone;
}

type GeetWeekProps = {
    forDate: Date,
    daysOffset: number
}

export function getWeek({ forDate, daysOffset }: GeetWeekProps) {
  const date = AddDays({date: forDate, daysToAdd: daysOffset});
  const day = date.getDay();
  console.log("day!! ", day)
  console.log("date!! ", date)


  return {
    date,
    start: AddDays({date, daysToAdd: -day}),
    end: AddDays({date, daysToAdd: 6 - day}),
  };
}

