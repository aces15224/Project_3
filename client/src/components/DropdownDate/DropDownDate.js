<<<<<<< HEAD
import React from 'react';
import DropdownDate from 'react-dropdown-date';

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
=======
import React from 'react';
import DropdownDate from 'react-dropdown-date';

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
>>>>>>> 4bcc50aa3aa2e03f2445e3b3d5e7a03ad1725393
