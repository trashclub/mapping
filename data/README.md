# How to use this data

There are two different formats of data files available in the repository: **shapefiles** and **CSVs**. All final shapefiles are located in the [geographic](https://github.com/trashclub/mapping/tree/master/data/geographic) folder, where as all cleaned and formatted CSVs are located under [output/final](https://github.com/trashclub/mapping/tree/master/data/output). 

In the following sections, I will discuss the acquisition and cleaning of each of these sets of files. Please note, for the CGC/Trash Club Mapping project, the following files are the most relevant:

1. **[SHAPEFILE] Census Blocks Shapefile w. 2010 Population Counts Added**
    * There are separate shapefiles for each NYC borough. 

2. **[CSV] Zipcodes with 2018 demographic percentages**
    * Each line is a different NYC zipcode
    * Question for Will: for next steps, would it be helpful to have this as a shapefile? 

I will to refer these items as Datasets #1 and #2 (though technically, #1 is not one, but several files). 

# Data Sources

### Dataset #1

 + [Population Counts from 2010 Census - P1 Table (Total Population)](https://data.census.gov/cedsci/table?g=0500000US36005.100000,36047.100000,36061.100000,36081.100000,36085.100000&tid=DECENNIALSF12010.P1&hidePreview=false):  the downloaded data currently lives in the [raw/2010Census_Total_Population](https://github.com/trashclub/mapping/tree/master/data/raw/2010Census_Total_Population) folder of this repo. 
 + [Base Shapefile of 2010 Census Blocks](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2010.html):
    + Clicking through that initial landing page will eventually lead you to [this web interface](https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2010&layergroup=Blocks) for downloading the actual census block shapefiles.
    + You will need to download shapefiles by county. 

### Dataset #2

+ American Community Survey (ACS) 2018 - 5-year Estimate - Demographic Data by Zipcodes 
    * This had to be downloaded in batches due to limitations of the web interface
    * I generated each of the URLs by passing in a string of all the zipcodes I was interested in 
        * [Example query](https://data.census.gov/cedsci/table?q=United%20States&g=8600000US11201&tid=ACSDP5Y2018.DP05&tp=true&hidePreview=true) with just one-zip code. 


# Data Cleaning + Shaping 

I completed a number of cleaning and shaping operations in Jupyter Notebooks using python, for the purpose of making the files ready for use. Of all the notebooks (.ipynb files) included in this repository, I will briefly describe their functions:

+ **acs_to_output**:

    * This is where I acquired the 2018 ACS demographic data bip zodes. As mentioned above, I had to generate the URL for accessing the zipcode data based on a list of NYC zipcodes.
    * As our team is only interested in looking at race, I dropped all but the race + ethnicity columns.
    * We had also decided we were only interested in the reported percentages, given that we would get our population counts from the 2010 Census. I also dropped the columns that noted the estimates (raw numbers) reported in the original data. 

+ **further_cleaning_to_final**:

    * In this notebook, I further clean up the columns. This time, I drop the subcategories related to race, as our final analysis would not look at racial and ethnic groups at that level of granularity. 
    * I also examine which zipcodes did not return data from Census.gov. Noted below:
        * 11695
        * 11112
        * 11202
        * 11252
        * 11431 
        * 11111 
        * 10045 
        * 11439 
        * 16091 
        * 20459 
        * 11629
        * 11471

+ **munging_census_blocks**:

    * I pulled the GEOID10 into a separate column because I knew that the Census Block shapefile used GEOID10s to identify the census blocks. By doing this, I created a column that I could use to join my shapefile and this population data. 
    * Importantly, I did not join the files in this notebook, but rather, in QGIS. 

# Caveats + Outstanding Issues

+ Using 2010 Census data offers us granularity at the expensive of recency -- the population counts are a decade old. The advantage is that, theoretically, our project can be (relatively) easily updated when the 2020 numbers are released. 

# Helpful Misc

+ [Census.gov: Joining Census Data to TIGER/Line Shapefiles](https://www2.census.gov/geo/pdfs/education/tiger/JoiningTIGERshp_with_AFFdata.pdf)
+ [QGIS Training Manual](https://docs.qgis.org/3.10/en/docs/training_manual/index.html)