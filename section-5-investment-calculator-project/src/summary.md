1.
import logo from '../assets/investment-calculator-logo.png';
logo get the path and assign to img src

2.
use <section> and <p> tags
add alt attribute to add description for the image in <img alt="Money bag" />

3.
add required to input field

4.
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        <tr>
    </tbody>
</table>

<tr> table row
<th> table header
<td> table data

5.
event.target.value return string, need to use parseInt(event.target.value) or Number(event.target.value) to convert to numbers, or add +newValue, this force string to be a number

6.
function handleChange(inputIdentifier, newValue){
    setInputValues(prevValues=>{
        return{
            ...prevValues,
            [inputIdentifier]: +newValue,
        }
    })

}

