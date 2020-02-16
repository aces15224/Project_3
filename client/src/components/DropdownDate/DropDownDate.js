import React, { useState } from 'react';
import DropdownDate from 'react-dropdown-date';

// const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

// //     if (month.length < 2) month = '0' + month;
// //     if (day.length < 2) day = '0' + day;
//     const date1=[year, month, day].join('-');
//     // const date2=<DropDownDate currentDate={date1}/>
//     return date1;
    
// }

const DropDownDate = (props) => {
    
    const newDate = props.newDate;
        return (
            
            <div>
                {/* <p>{this.props.currentDate}</p> */}
                <DropdownDate
                    // currentDate={
                    //     this.props.currentDate
                    // }
                    startDate={                         
                        '2020-01-01'                    
                    }
                    endDate={                           
                        '2025-12-31'                    
                    }
                    selectedDate={                      
                        newDate.current         
                    }
                    order={                             
                        ['year', 'month', 'day']        
                    }
                    onMonthChange={(month) => {         
                        console.log(month);
                    }}
                    onDayChange={(day) => {             
                        console.log(day);
                    }}
                    onYearChange={(year) => {           
                        console.log(year);
                    }}
                    onDateChange={(date) => {           
                        console.log(date);
                        newDate.current = date;
                    }}
                    ids={                               
                        {
                            year: 'select-year',
                            month: 'select-month',
                            day: 'select-day'
                        }
                    }
                    names={                             
                        {
                            year: 'year',
                            month: 'month',
                            day: 'day'
                        }
                    }
                    classes={                           
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
                    defaultValues={                     
                        {
                            year: 'select year',
                            month: 'select month',
                            day: 'select day'
                        }
                    }
                    options={                           
                        {
                            yearReverse: true,              
                            monthShort: true,               
                            monthCaps: true                 
                        }
                    }
                    
                />

            </div>
        );

    }
export default DropDownDate;
