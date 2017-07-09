/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//<![CDATA[
		
//Used to show or hide official roster.
function hideOff(show)
{
        if (!show)
        {
                /*
                //document.getElementById("tblWeek1").setAttribute("class", "tblWeek noprint hideAway");

                for (var i=1;i<9;i++)
                {
                        document.getElementById("tblHWeek" + String(i)).setAttribute("class", "tblHWeek");

                        //For IE7 and earlier locally
                        document.getElementById("tblHWeek" + String(i)).setAttribute("className", "tblHWeek");
                }

                */

                togVisible(".tblHWeek", rosterStyle);
        }
        else
        {
                /*
                //document.getElementById("tblWeek1").setAttribute("class", "tblWeek noprint removeAway");

                for (var i=1;i<9;i++)
                {
                        document.getElementById("tblHWeek" + String(i)).setAttribute("class", "tblHWeek noprint removeAway");

                        //For IE7 and earlier locally
                        document.getElementById("tblHWeek" + String(i)).setAttribute("className", "tblHWeek noprint removeAway");
                }
                */

                togVisible(".tblHWeek", rosterStyle);
        }
}

//Used to show or hide practical roster.
function hidePrac(show)
{
        if (!show)
        {
                /*
                for (var i=1;i<9;i++)
                {
                        document.getElementById("tblWeek" + String(i)).setAttribute("class", "tblWeek");

                        //For IE7 and earlier locally
                        document.getElementById("tblWeek" + String(i)).setAttribute("className", "tblWeek");
                }
                */

                togVisible(".tblWeek", rosterStyle);
        }
        else
        {
                /*
                for (var i=1;i<9;i++)
                {
                        document.getElementById("tblWeek" + String(i)).setAttribute("class", "tblWeek noprint removeAway");

                        //For IE7 and earlier locally
                        document.getElementById("tblWeek" + String(i)).setAttribute("className", "tblWeek noprint removeAway");
                }
                */

                togVisible(".tblWeek", rosterStyle);
        }
}

//Taken from http://davidwalsh.name/add-rules-stylesheets 2014/04/19
function addCSSRule(sheet, selector, rules, index)
{
        if(sheet.insertRule)
        {
                sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else
        {
                sheet.addRule(selector, rules, index);
        }
}

//Taken from http://www.rainbodesign.com/pub/css/css-javascript.html
function findCSSRule(mySheet, selector)
{
        var ruleIndex = -1;				// Default to 'not found'
        var theRules = mySheet.cssRules ? mySheet.cssRules : mySheet.rules;
        for (i=0; i<theRules.length; i++)
        {
                if (theRules[i].selectorText === selector)
                {
                        ruleIndex = i;
                        break;
                } // endif theRules[i]
   } // end for i
        return ruleIndex;
} // end findCSSRule()

//Taken from http://www.rainbodesign.com/pub/css/css-javascript.html (Modified)
function getCSSSheet(styleTag)
{
        var styleSheet;

        if(styleTag.sheet)
        {
                styleSheet = styleTag.sheet;  //For most browsers
        }
        else
        {
                styleSheet = styleTag.styleSheet; //For IE before IE9
        }

        return styleSheet;
}

//Taken from http://www.rainbodesign.com/pub/css/css-javascript.html (Slightly modified)
function removeCSSRule(mySheet, ruleIndex)
{
        if (mySheet.removeRule)
        {
                mySheet.removeRule(ruleIndex);		// For Internet Explorer
        }
        else
        {
                mySheet.deleteRule(ruleIndex);		// For Firefox, Chrome, etc.
        } // endif mySheet.removeRule
} // end removeCSSRule()

//Taken from http://www.rainbodesign.com/pub/css/css-javascript.html
function changeRule(selector, property, setting)
{
        var theRule = mySheet.cssRules ? mySheet.cssRules[findCSSRule(selector)] : mySheet.rules[findCSSRule(selector)];
        eval('theRule.style.' + property + '="' + setting + '"');
        return false;
} // end changeRule()

function togClk(clk)
{
        var ruleIndex = findCSSRule(getCSSSheet(rosterStyle), clk);

        if (ruleIndex < 0)
        {
                addCSSRule(getCSSSheet(rosterStyle), clk, "display: none;");
        }
        else
        {
                removeCSSRule(getCSSSheet(rosterStyle), findCSSRule(getCSSSheet(rosterStyle), clk));
        }
}

function togRoster(roster)
{
        if(document.getElementById(roster).style.display === "none" || document.getElementById(roster).style.display === "")
        {
            document.getElementById(roster).style.display = "inline";
        }
        else
        {
            document.getElementById(roster).style.display = "none";
        }
    
    
//        var ruleIndex = findCSSRule(getCSSSheet(rosterStyle), roster);
//
//        var test = getCSSSheet(rosterStyle).cssRules;
//
//
//        if (ruleIndex < 0)
//        {
//                addCSSRule(getCSSSheet(rosterStyle), roster, "display: none;");
//        }
//        else
//        {
//                removeCSSRule(getCSSSheet(rosterStyle), findCSSRule(getCSSSheet(rosterStyle), roster));
//        }
}

function togVisible(element, styleSheet)
{
        var ruleIndex = findCSSRule(getCSSSheet(styleSheet), element);

        if (ruleIndex < 0)
        {
                addCSSRule(getCSSSheet(styleSheet), element, "display: none;");
        }
        else
        {
                removeCSSRule(getCSSSheet(styleSheet), findCSSRule(getCSSSheet(styleSheet), element));
        }
}

//Returns today's date as a string
function getToday()
{
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyy = today.getFullYear();

        return today.toDateString();
}

//Places date in object sent.  (Uses getToday).
function displayDate(dateCont)
{
        txtHTML = document.getElementById(dateCont).innerHTML;
        txtHTML = txtHTML + getToday();
        document.getElementById(dateCont).innerHTML = txtHTML;
}

//Returns the difference of days between two dates.
function getDayDiff(firstDate, secondDate)
{
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

        var diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));

        return diffDays;
}

//Returns today's date at midnight (Begining of today).
function getTodayStart()
{
        var today = new Date();
        //today.setMonth(today.getMonth() + 1);
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);

        return today;
}

//Returns difference of days betwween a given date and today.
function getDaysToToday(firstDate)
{
        var daysDiff = getDayDiff(firstDate, getTodayStart());

        return daysDiff;
}

//Retunrns the difference of weeks between a given date and today.
function getWeeksToday(firstDate)
{
        var dayDiff = getDaysToToday(firstDate);

        var weekdDiff = (dayDiff + 1) / 7; //Plus 1 is to change days difference to week position. E.g. Diff 0 is first day in week.

        return Math.ceil(weekdDiff) - 1;

}

//Taken from https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript (Modified)
//Sets the anchor link of an anchor tag
function setLink(linkTagId, linkLoc)
{
        document.getElementById(linkTagId).href=linkLoc;
}

//Sets current week's link and table captions.
function setCurrentWeek(linkTagId, linkLoc, weekDivName, captionClass)
{
        var curWeek = getWeeksToday(startDate) + 1;

        //Set today's date to link to current week.
        setLink(linkTagId, linkLoc + curWeek);

        //Sets caption of current week tables to currentWeek css style.
        var curWeekDiv = document.getElementById(weekDivName + curWeek);
        var curWeekDivs = curWeekDiv.getElementsByTagName("div"); 
        var curWeekTables;
        var curWeekCap;

        for ( i1 = 0; i1 < curWeekDivs.length; i1++ )
        {
                curWeekTables = curWeekDivs[i1].getElementsByTagName("table"); 

                for ( i2 = 0; i2 < curWeekTables.length; i2++ )
                {
                        curWeekCap = curWeekTables[i2].getElementsByTagName("caption");

                        curWeekCap[0].className = captionClass;
                }
        }

}

function test()
{
        //Hide roster plans on load
        
        //document.getElementById("hide4ClkPrac").checked = true;
        //togRoster("#tbl4Clerks");
        //document.getElementById("hide4ClkOff").checked = true;
        //togRoster("#tblHateClerks");
        //document.getElementById("hide5ClkPrac").checked = true;
        //togRoster("#tbl5Clerks");
        
        
        //Hide practical roster on load
        document.getElementById("hidePractical").checked = true;
        hidePrac(true);

        //Hide old roster week on load
        document.getElementById("showOld").checked = false;
        togVisible(".weekDivOld", rosterStyle);

        //Show current date
        displayDate("todayDateX");


        setCurrentWeek("linkToday", "#weekDiv", "weekDiv", "currentWeek");

}

//Global variable for start date of roster
var startDate = new Date(2017, 7-1, 02);

//]]>