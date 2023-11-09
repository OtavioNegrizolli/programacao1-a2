

export default class Product {

    /** @type number */
    #id;
    /** @type string */
    #description;
    /** @type string */
    #category;
    /** @type string */
    #subcategory;
    /** @type string */
    #measurementUnity;
    

    /**
     * 
     * @param {Object} creationData 
     * @property {number?} id - product registry unique indentifier - optional
     * @property {string} description - text with at least 5 chacacteres up to 50 that describes/name the product
     * @property {string} category - the category of the product
     * @property {string} subcategory - the subcategory of the product
     */
    constructor({
        id,
        description,
        category,
        subcategory,
        measurementUnity
    }) {
        this.#id = id || null;
        this.#description = description;
        this.#category = category;
        this.#subcategory = subcategory;
        this.#measurementUnity = measurementUnity;
    }


    /** 
     * @description the product register id  
     * @returns {number | null} the id number if exists, and null otherwise
     */
    get id() {
        return this.#id;
    }

    /** 
     * @description text with at least 5 chacacteres up to 50 that describes/name the product
     * @returns {string}
     */
    get description() {
        return this.#description;
    }

    /** 
     * @description the product register id  
     * @returns {string} the category of the product
     */
    get category() {
        return this.#category;
    }

    /** 
     * @description the product subcategory
     * @returns {string} the subcategory of the product
     */
    get subcategory() {
        return this.#subcategory;
    }
    /** 
     * @description the product sale measure unit like 'KG'
     * @returns {string} the subcategory of the product
     */
    get measurementUnity() {
        return this.#measurementUnity;
    }

}
