const apiKey = '-NpX7FmwTVs3KTi0UtCATQm4tm2rK6Md3Kkd9MGMSBBlCPIN46gbbQhgIbocXU_NxL_YSGMAq43HqeuJNClRLRmTtJusO8ZARrnVUS24TQKq4cB42G4zmepZQcPZXnYx';

const Yelp = {

    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}` , {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.category,
                    rating: business.rating,
                    reviewCount: business.review_count
                
                }));
            }
        });

    }

}

export default Yelp;