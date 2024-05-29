const Product = require('../model/productsModel');

const getAllProducts = async(req, res)=>{
    const {id, company, name, featured, sort, select} = req.query;
    const object = {};
    if(id){
        object.id = id;
    }
    if(company){
        object.company = {$regex: company, $options:"i"};
    }
    if(name){
        object.name = {$regex: name, $options:"i"};
    }
    if(featured){
        object.featured = {$regex: featured, $options:"i"};
    }

    let apiData = Product.find(object);

    if(sort){
        let removedComma = sort.replace(",", " ");
        apiData = apiData.sort(removedComma);
    }
    if(select){
        let removedComma = select.split(',').join(' ');
        apiData = apiData.select(removedComma);
    }
    // console.log(object);
    const data =  await apiData;
    res.status(200).json({data});
}

const getAllProductsTesting = async(req, res)=>{
    const {company} = req.query;
    const object = {};

    if(company){
        object.company = company;
    }
    const data =  await Product.find(object)
    res.status(200).json({data});
}

module.exports = {getAllProducts, getAllProductsTesting};