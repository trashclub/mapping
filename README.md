# Mapping
A few mapping experiments looking at waste-adjacent datasets (documented in the Data Library)

## Resources

**Mapbox**

+ [Medium: How to build a “scrollytelling” map](https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b)
+ [Mapbox Demo: Scrollytelling with Mapbox Example](https://demos.mapbox.com/scrollytelling/)
+ [Mapbox Docs: Fly to a location based on scroll position](https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/)
+ [Mapbox: Interactive Storytelling Template](https://www.mapbox.com/solutions/interactive-storytelling)


## Experiment: August 18, 2020 -- QGIS + Adobe Illustrator (RK)

A very quick map produced from NYC Open Data on food scrap drop-off sites: 

![NYC Map of Community Districts Showing Drop-off Sites as Points](assets/drop-offs.png)

**Ways to continue to improve this map and the related datasets:**

Easy to imagine how it may be made more interesting with added context, annotations, additional datasets, etc.

* Add in elected officials to the geographic dataset, export as geojson
* Add column to capture status (open / closed) to Food Scrap Drop-offs dataset (especially given new conditions post-COVID)
* Annotate the map with relevant council members, interactive version could do this by tooltip. 

## Experiment: August 21, 2020 -- Mapbox

### About Geographic Data -- Sources & Related Writings

+ [Zipcode shapefile](https://data.cityofnewyork.us/Business/Zip-Code-Boundaries/i8iw-xf4u/data?no_mobile=true) -- the shape file contains population counts attributed to USPS. Does not seem accurate for all zip codes (e.g. count for 11359 noted as 0)
+ [Difference between a zipcode and Zip Code Tabulation Area (ZCTA)](https://www.census.gov/programs-surveys/geography/guidance/geo-areas/zctas.html)
	+ "ZIP Code Tabulation Areas (ZCTAs) are generalized areal representations of United States Postal Service (USPS) ZIP Code service areas. The USPS ZIP Codes identify the individual post office or metropolitan area delivery station associated with mailing addresses. USPS ZIP Codes are not areal features but a collection of mail delivery routes."
	+ **"In most instances the ZCTA code is the same as the ZIP Code for an area."**
	+ Most granular information is available by census block, but zip codes are more user-friendly.

### About Geographic Data -- Conclusions & Findings:

+ Most granular information is available by census block, but zip codes are more user-friendly. **ZCTA match pretty well with zipcodes** -- based on the above report by the Census Bureau. 

