import React, { Component } from 'react';
import DropdownDate from 'react-dropdown-date';

const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;
    const date1=[year, month, day].join('-')
    
    return date1;
    
}

class DropDownDate extends Component {
    constructor(props) {
        super(props);
        this.state = { date: "", selectedDate: "", dateNew: ""};
        
    }
    render() {
        return (
            <div>

                <DropdownDate
                    startDate={                         // optional, if not provided 1900-01-01 is startDate
                        '2020-01-01'                    // 'yyyy-mm-dd' format only
                    }
                    endDate={                           // optional, if not provided current date is endDate
                        '2025-12-31'                    // 'yyyy-mm-dd' format only
                    }
                    selectedDate={                      // optional
                        this.state.selectedDate         // 'yyyy-mm-dd' format only
                    }
                    order={                             // optional
                        ['year', 'month', 'day']        // Order of the dropdowns
                    }
                    onMonthChange={(month) => {         // optional
                        console.log(month);
                    }}
                    onDayChange={(day) => {             // optional
                        console.log(day);
                    }}
                    onYearChange={(year) => {           // optional
                        console.log(year);
                    }}
                    onDateChange={(date) => {           // optional
                        console.log(date);
                        this.setState({ date: date, selectedDate: formatDate(date) });
                    }}
                    ids={                               // optional
                        {
                            year: 'select-year',
                            month: 'select-month',
                            day: 'select-day'
                        }
                    }
                    names={                             // optional
                        {
                            year: 'year',
                            month: 'month',
                            day: 'day'
                        }
                    }
                    classes={                           // optional
                        {
                            dateContainer: 'classes',
                            yearContainer: 'classes',
                            monthContainer: 'classes',
                            dayContainer: 'classes',
                            year: 'classes classes',
                            month: 'classes classes',
                            day: 'classes classes',
                            yearOptions: 'classes',
                            monthOptions: 'classes',
                            dayOptions: 'classes'
                        }
                    }
                    defaultValues={                     // optional
                        {
                            year: 'select year',
                            month: 'select month',
                            day: 'select day'
                        }
                    }
                    options={                           // optional
                        {
                            yearReverse: true,              // false by default
                            monthShort: true,               // false by default
                            monthCaps: true                 // false by default
                        }
                    }
                    
                />

            </div>
        );
    }
}
export  {DropDownDate};
