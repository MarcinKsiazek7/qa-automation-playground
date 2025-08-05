# SoapUI Projects

## CountryInfo-soapui-project.xml
Example project using the public CountryInfo SOAP API.

**Service WSDL**:  
http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL

### Request
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
   <soapenv:Header/>
   <soapenv:Body>
      <web:CountryISOCode>
         <web:sCountryName>Poland</web:sCountryName>
      </web:CountryISOCode>
   </soapenv:Body>
</soapenv:Envelope>


How to run
Open SoapUI.

Go to File → Import Project.

Select CountryInfo-soapui-project.xml.

Click Submit Request to run the test.
