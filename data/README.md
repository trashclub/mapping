# How to use this data

There are two different formats of data files available in the repository: **shapefiles** and **CSVs**. All final shapefiles are located in the [geographic](https://github.com/trashclub/mapping/tree/master/data/geographic) folder, where as all cleaned and formatted CSVs are located under [output/final](https://github.com/trashclub/mapping/tree/master/data/output). 

In the following sections, I will discuss the acquisition and cleaning of each of these sets of files. Please note, for the CGC/Trash Club Mapping project, the following files are the most relevant:

1. **[SHAPEFILE] Census Blocks Shapefile w. 2010 Population Counts Added**
    * There are separate shapefiles for each NYC borough. 

2. **[CSV] Zipcodes with 2018 demographic percentages**
    * Each line is a different NYC zipcode
    * Question for Will: for next steps, would it be helpful to have this as a shapefile? 

I will refer these items as Datasets #1 and #2 (though technically, #1 is not one, but several files). 

# Data Sources

### Dataset #1

 + [Population Counts from 2010 Census - P1 Table (Total Population)](https://data.census.gov/cedsci/table?g=0500000US36005.100000,36047.100000,36061.100000,36081.100000,36085.100000&tid=DECENNIALSF12010.P1&hidePreview=false)
 + [Base Shapefile of 2010 Census Blocks](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2010.html):
    + Clicking through that initial landing page will eventually lead you to [this web interface](https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2010&layergroup=Blocks) for downloading the actual census block shapefiles.
    + You will need to download shapefiles by county. 

### Dataset #2

# Data Cleaning + Munging