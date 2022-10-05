"use strict";
// Math extensions
Math.deg2rad = Math.PI/180.0;

//............................................
// Vector classes

/**
* Class for a 2D Vector. A V2 is also an Array of length 2, where:
* index 0 is the X component and
* index 1 is the y component
*/
class V2 extends Array{

    // These are getter functions that allow access to index 0 and 1
    // using for example:
    // let myVec2D = new V2(3,4);
    // let x = myVec2D.x; // get x component (index 0) value of myVec2D
    get x(){ return this[0];}
    get y(){ return this[1];}

    // These are setter functions that allow access to index 0 and 1
    // using for example:
    // let myVec2D = new V2(3,4);
    // myVec3D.x = 7; // set x component of myVec2D to 7
    set x(x){this[0] = x;}
    set y(y){this[1] = y;}

    // these are quick links to standard vector layouts. It is just for conveniece
    // to quickly create vector objects we often need for direction calculations.
    // example:
    // let up = V2.UP; // creates a new V2 with the values [0,1]
    static get ZERO(){ return new V2( 0.0, 0.0)};
    static get RIGHT(){return new V2( 1.0, 0.0)};
    static get LEFT(){ return new V2(-1.0, 0.0)};
    static get UP(){   return new V2( 0.0, 1.0)};
    static get DOWN(){ return new V2( 0.0,-1.0)};

    /** creates a new V2 object. x and y are optional and x can be either a float
    * or an Array to copy the values from.
    * @param {float or Array} x the x value of this vector.
    * @param {float} y the y value of this vector.
    */
    constructor(x,y){
        if(Array.isArray(x)){
            super(x[0],x[1]); // if x is an array, copy array values.
        } else {
            if(!isNaN(x) && !isNaN(y)){
                super(x,y); // if x and y are numbers, make new vector with those.
            } else {
                super(0,0); // if x and y are neither array or numbers or undefined, make new [0,0] vector.
            }
        }
    }

    /** returns the magnitude of this vector.
    * @return {number} the magnitude of this vector.
    */
    magnitude(){
        // this method is already completed as an example.
        let magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        return magnitude;
    }

    /** returns the distance from this point to the given point v.
    * @param {V2} v the point to valculate the distance to.
    * @return {number} the distance to v.
    */
    distanceTo(v){
        // TODO: Complete this method
        let diff_x = this.x - v.x
        let diff_y = this.y - v.y
        return Math.sqrt(diff_x*diff_x + diff_y*diff_y);
    }

    /** normalizes this vector.
    * @return {V2} this vector to chain up commands.
    */
    normalize(){
        // TODO: Complete this method
        this.multiplyScalar(1/this.magnitude())
        return this;
    }

    /** sets the values x and y for this vector.
    * @param {number} x the new x value.
    * @param {number} y the new y value.
    * @return {V2} this vector to chain up commands.
    */
    set(x, y){
        // TODO: Complete this method
        this.x = x
        this.y = y
        return this;
    }

    /** multiplies the scalar s on this vector
    * @param {number} s value to multiply and scale the vector.
    * @return {V2} this vector to chain up commands.
    */
    multiplyScalar(s){
        // TODO: Complete this method
        this.x *= s;
        this.y *= s;
        return this;
    }

    /** calculates and returns the dot product between this vector and the vector v.
    * @param {V2} v vector to calculate the dot product with.
    * @return {number} the result of the dot product.
    */
    dot(v){
        // TODO: Complete this method
        return this.x*v.x + this.y*v.y;
    }

    /** adds another vector v on top of this vector.
    * @param {V2} v vector to add to this vector.
    * @return {V2} this vector to chain up commands.
    */
    addV(v){
        // TODO: Complete this method
        this.add(v.x, v.y);
        return this;
    }

    /** adds the values x and y to this vector.
    * @param {number} x x value to add.
    * @param {number} y y value to add
    * @return {V2} this vector to chain up commands.
    */
    add(x, y){
        // TODO: Complete this method
        this.x += x;
        this.y += y;
        return this;
    }

    /** subtracts another vector v from this vector.
    * @param {V2} v vector to subtract from this vector.
    * @return {V2} this vector to chain up commands.
    */
    subtractV(v){
        // TODO: Complete this method
        this.subtract(v.x, v.y);
        return this;
    }

    /** subtracts the values x and y from this vector.
    * @param {number} x x value to subtract.
    * @param {number} y y value to subtract.
    * @return {V2} this vector to chain up commands.
    */
    subtract(x, y){
        // TODO: Complete this method
        this.x -= x;
        this.y -= y;
        return this;
    }

    /** inverts this vector (makes it face the opposite direction, but keep its length).
    * @return {V2} this vector to chain up commands.
    */
    invert(){
        // TODO: Complete this method
        return [this];
    }

    /** checks if all values of this vector are equal to the respective values of
    given vector v. Make sure to not compare the references, but the actual
    values of x and y!
    * @return {bool} true or false, whether they are qual.
    */
    equals(v){
        // TODO: Complete this method (must return bool)
        for (let i=0; i < this.length; i++){
            if (this[i] != v[i]){
                return false;
            }
        }
        return true;
    }

    /** make a new object, that is an exact copy of this one.
    * @return {V2} the copy.
    */
    clone(){ return new V2(this.x, this.y); }

    toV3(){ return new V3(this.x, this.y, 0); }

    toFloat32(){ return new Float32Array(this);}

    toString(){ return "[" + super.toString() + "]";}
}

/**
* Class for a 3D Vector. A V3 is also an Array of length 3, where:
* index 0 is the X component and
* index 1 is the y component
* index 2 is the z component
* We often need 3D vectors even when working in 2D, to be able to do operations
* with a 3x3 matrix.
*/
class V3 extends Array{

    get x(){ return this[0];}
    get y(){ return this[1];}
    get z(){ return this[2];}

    set x(x){this[0] = x;}
    set y(y){this[1] = y;}
    set z(z){this[2] = z;}

    static get ZERO(){   return new V3( 0.0, 0.0, 0.0)};
    static get RIGHT(){  return new V3( 1.0, 0.0, 0.0)};
    static get LEFT(){   return new V3(-1.0, 0.0, 0.0)};
    static get UP(){     return new V3( 0.0, 1.0, 0.0)};
    static get DOWN(){   return new V3( 0.0,-1.0, 0.0)};
    static get FORWARD(){return new V3( 0.0, 0.0, 1.0)};
    static get BACK(){   return new V3( 0.0, 0.0,-1.0)};

    constructor(x,y,z){
        if(Array.isArray(x)){
            super(x[0],x[1],x[2]);
        } else {
            if(!isNaN(x) && !isNaN(y) && !isNaN(z)){
                super(x,y,z);
            } else {
                super(0,0,0);
            }
        }
    }

    /** returns the magnitude of this vector.
    * @return {number} the magnitude of this vector.
    */
    magnitude(){
        // TODO: Complete this method
        let magnitude = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
        return magnitude;
    }

    /** returns the distance from this point to the given point v.
    * @param {V3} v the point to valculate the distance to.
    * @return {number} the distance to v.
    */
    distanceTo(v){
        // TODO: Complete this method
        let diff_x = this.x - v.x;
        let diff_y = this.y - v.y;
        let diff_z = this.z - v.z;
        return Math.sqrt(diff_x*diff_x + diff_y*diff_y + diff_z*diff_z);;
    }

    /** normalizes this vector.
    * @return {V3} this vector to chain up commands.
    */
    normalize(){
        // TODO: Complete this method
        this.multiplyScalar(1/this.magnitude())
        return this;
    }

    /** sets the values x and y for this vector.
    * @param {number} x the new x value.
    * @param {number} y the new y value.
    * @param {number} z the new z value.
    * @return {V3} this vector to chain up commands.
    */
    set(x, y, z){
        // TODO: Complete this method
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /** multiplies the scalar s on this vector
    * @param {number} s value to multiply and scale the vector.
    * @return {V3} this vector to chain up commands.
    */
    multiplyScalar(s){
        // TODO: Complete this method
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    /** calculates and returns the dot product between this vector and the vector v.
    * @param {V3} v vector to calculate the dot product with.
    * @return {number} the result of the dot product.
    */
    dot(v){
        // TODO: Complete this method
        return this.x*v.x + this.y*v.y + this.z*v.z;
    }

    /** calculates and returns the cross product between this vector and the vector v (this X v).
    * @param {V3} v vector to calculate the cross product with.
    * @return {V3} the result of the cross product.
    */
    cross(v){
        // TODO: Complete this method
        let result = new V3();
        result.x = this.y * v.z - this.z * v.y;
        result.y = this.z * v.x - this.x * v.z;
        result.z = this.x * v.y - this.y * v.x;
        return result;
    }

    /** adds another vector v on top of this vector.
    * @param {V3} v vector to add to this vector.
    * @return {V3} this vector to chain up commands.
    */
    addV(v){
        // TODO: Complete this method
        this.add(v.x, v.y, v.z);
        return this;
    }

    /** adds the values x, y and z to this vector.
    * @param {number} x x value to add.
    * @param {number} y y value to add
    * @param {number} z z value to add
    * @return {V3} this vector to chain up commands.
    */
    add(x, y, z){
        // TODO: Complete this method
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }

    /** subtracts another vector v from this vector.
    * @param {V3} v vector to subtract from this vector.
    * @return {V3} this vector to chain up commands.
    */
    subtractV(v){
        // TODO: Complete this method
        this.subtract(v.x, v.y, v.z);
        return this;
    }

    /** subtracts the values x, y and z from this vector.
    * @param {number} x x value to subtract.
    * @param {number} y y value to subtract.
    * @param {number} z z value to subtract.
    * @return {V3} this vector to chain up commands.
    */
    subtract(x, y, z){
        // TODO: Complete this method
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }

    /** inverts this vector (makes it face the opposite direction, but keep its length).
    * @return {V3} this vector to chain up commands.
    */
    invert(){
        // TODO: Complete this method
        return [this];
    }

    /** checks if all values of this vector are equal to the respective values of
    given vector v. Make sure to not compare the references, but the actual
    values of x, y and z (deep compare)!
    * @return {bool} true or false, whether they are qual.
    */
    equals(v){
        // TODO: Complete this method (must return bool)
        for (let i=0; i < this.length; i++){
            if (this[i] != v[i]){
                return false;
            }
        }
        return true;
    }

    /** make a new object, that is an exact copy of this one.
    * @return {V3} the copy.
    */
    clone(){ return new V3(this.x, this.y, this.z); }

    toV2(){ return new V2(this.x, this.y); }

    toFloat32(){ return new Float32Array(this);}

    toString(){ return "[" + super.toString() + "]";}
}

//............................................
// A 3 by 3 Matrix.
// the matrix object is an array that stores the matrix data in COLOUMN-MAJOR-ORDER!:
// The array values (here equal to the indices in the array):
// [0, 1, 2, 3, 4, 5, 6, 7, 8] define the matrix:
//      | 0 3 6 |
//      | 1 4 7 |
//      | 2 5 8 |
// or, in terms of the basis vector notation, the values:
// [x.x, x.y, 0, y.x, y.y, 0, p.x, p.y, 1] define the matrix:
//      | x.x y.x p.x |
//      | x.y y.y p.y |
//      | 0   0   1   |
// where: x, y, are 2-component vectors describing the matrix 2d coordinate system
// (local coordinate system within relative to the global coordinate system).
// and: p is a 2-component vector describing the origin of matrix coordinate system.
//
// this means a 2d translation matrix, translating by [x,y] should be layed out like this:
// [1, 0, 0, 0, 1, 0, x, y, 1 ].
// which would be equal to:
//      | 1 0 x |
//      | 0 1 y |
//      | 0 0 1 |
class M3 extends Array{

    // A quick way to make a new IDENTITY matrix (one with all 0s and diagonal 1s)
    static get IDENTITY(){
        return new M3([1,0,0,0,1,0,0,0,1]);
    }

    constructor(data){
        // make a new matrix array object with 9 (3x3) values
        super(0,0,0,0,0,0,0,0,0); // make new empty matrix
        if(data !== undefined){ // if data is given, copy into array values
            for(let i = 0; i < 9; i++){
                this[i] = data[i];
            }
        }
    }

    //....................................................................
	//Methods

    /** make a new object, that is an exact copy of this one.
    * @return {M3} the copy.
    */
    clone(){
        return new M3(this);
    }

    /** reset data back to identity.
    * @return {M3} this matrix to chain up commands.
    */
	reset(){
        // TODO: Complete this method
        let tmp = M3.IDENTITY;
        for (let i=-0; i<this.length; i++){
            this[i] = tmp[i];
        }
		return this;
	}

    /** Calculates determinant of this matrix
    * @return {number} the determinant.
    */
    determinant(){
        // TODO: Complete this method (ONLY FOR BONUS OBJECTIVE)
        let result = 0; 
        let tmp=this.determinant_helper();
        
        result += this[0]*tmp[0];
        result -= this[1]*tmp[1];
        result += this[2]*tmp[2];
        
        return result;
    }

    /** reset data back to identity.
    * @return {M3} this matrix to chain up commands.
    */
    determinant_helper(){
        let result = new M3()
        result[0] = this[4]*this[8] - this[5]*this[7];
        result[1] = this[3]*this[8] - this[5]*this[6];
        result[2] = this[3]*this[7] - this[4]*this[6];

        result[3] = this[1]*this[8] - this[2]*this[7];
        result[4] = this[0]*this[8] - this[2]*this[6];
        result[5] = this[0]*this[7] - this[1]*this[6];

        result[6] = this[1]*this[5] - this[2]*this[4];
        result[7] = this[0]*this[5] - this[2]*this[3];
        result[8] = this[0]*this[4] - this[1]*this[3];
        return result;
   }

    toFloat32(){ return new Float32Array(this);}

    //....................................................................
	// Static Methods
    // Most of the Matrix functions are static, since it makes it a lot easier
    // to manage the objects and ensure that we don't accidentally overwrite properties
    // of the objects we are currently doing calculations on.
    // Static methods have to be called from the class instead of from an instance
    // of the class, more details on that here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

    // NOTE: YOU CAN NOT USE THE this KEYWORD WITHIN STATIC METHODS!

    // examples:
    // Instance methods eg. determinant:
    // let myMatrix = new M3();
    // let determinant = myMatrix.determinant();

    // Static methods eg. multM3:
    // let matrixA = new M3();
    // let matrixB = new M3();
    // let resultMatrix = M3.multM3(matrixA, matrixB);

    /** Creates a new transformation matrix that translates by x, y.
    * @param {number} x amount to translate on the x axis.
    * @param {number} y amount to translate on the y axis.
    * @return {M3} a new Matrix object with the resulting translation matrix.
    */
    static translationMatrix(x, y){
        // this method is already completed as an example.

        // a 2d translation matrix should be layed out like this:
        // [1, 0, 0, 0, 1, 0, x, y, 1 ].
        // which would be equal to:
        //      | 1 0 x |
        //      | 0 1 y |
        //      | 0 0 1 |
        // so we create a new matrix identity matrix:
        let result = M3.IDENTITY;
        // and set the respective positions to the alues of x and y
        result[6] = x;
        result[7] = y;
        return result;
    }

    /** Creates a new transformation matrix that rotates by "angle" degrees.
    * If the parameter out is not defined, a new matrix is created and returned
    * @param {number} angle angle of rotion around in degrees.
    * @return {M3} a new Matrix object with the resulting rotation matrix.
    */
    static rotationMatrix(angle){
        let result = M3.IDENTITY;
        // TODO: Complete this method
        angle = angle%360;
        let theta = angle * Math.deg2rad;
        result[0] = Math.cos(theta);
        result[1] = Math.sin(theta);
        result[3] = Math.sin(theta)*(-1);
        result[4] = Math.cos(theta);
        return result;
    }

    /** Creates a new transformation matrix that scales by x, y.
    * @param {number} x amount to scale on the x axis.
    * @param {number} y amount to scale on the y axis.
    * @return {M3} a new Matrix object with the resulting the resulting scale matrix.
    */
    static scaleMatrix(x, y){
        let result = M3.IDENTITY;
        // TODO: Complete this method
        result[0] = x;
        result[4] = y;
        return result;
    }

    /** Multiplies two 3x3 matrices a and b (a * b). A new M3
    * is created for the resulting produc matrix.
    * @param {M3} a the matrix to use as multiplicand.
    * @param {M3} b the matrix to use as multiplier.
    * @return {M3} a new Matrix object with the resulting product matrix.
    */
    static multM3(a, b){
        let result = M3.IDENTITY;
        // TODO: Complete this method
        for (let i=0; i<3; i++){
            let idx_b = 3*i;
            let tmp_b = new V3(b[idx_b], b[idx_b+1], b[idx_b+2]);
            for (let j=0; j<3; j++){
                let tmp_a = new V3(a[j], a[j+3], a[j+6]);
                result[j + idx_b] = tmp_a.dot(tmp_b);
            }
        }
        
        return result;
    }

    /** Transforms given V3 v by given matrix m (meaning, performs a multiplication m * v).
    * Returns a new V3 object with the result.
    * @param {M3} m matrix to transform with.
    * @param {V3} v V3 to be transformed.
    * @return {V3} A new V3 with the resulting transformation.
    */
    static multV3(m, v){
        let result = new V3();
        // TODO: Complete this method
        for (let i=0; i<v.length; i++){
            for (let j=0; j<v.length; j++){
                let idx = 3*j + i;
                result[i] += m[idx]*v[j];
            }
        }
        return result;
    }

    /** Transforms given V2 v by given matrix m. It is useful to have a multV2 and multV3 function,
    * since we often have 2D vectors and it would be very tedious to first convert them all into 3D
    * vectors.
    * Returns a new V2 object with the result.
    * @param {M3} m matrix to transform with.
    * @param {V2} v V2 to be transformed.
    * @return {V2}a new V3 with the resulting transformation.
    */
    static multV2(m, v){
        // We can execute a multiplication between a 3x3 matrix and a 2d vector, by
        // assuming that the z component of the vector is 1.
        let result = new V2();
        // TODO: Complete this method

        let tmp = new V3(v[0], v[1], 1);
        let tmp_result = new V3();
        for (let i=0; i<tmp.length; i++){
            for (let j=0; j<tmp.length; j++){
                tmp_result[i] += m[3*j + i]*tmp[j];
            }
        }
        
        result[0] = tmp_result[0];
        result[1] = tmp_result[1];

        return result;
    }

    /**
     * @param {M3} m the matrix to be scaled
     * @param {number} scalar 
     * @returns {M3} a new matrix with the resulting scaled values.
     */
    static multiplyScalar(m, scalar){
        let result = new M3();
        for (let i=0; i<m.length; i++){
            result[i] = m[i] * scalar;
        }
        return result;
   }

    /** Element-wise multiplication
     * @param {M3} a the matrix to use as multiplicand
     * @param {M3} b the matrix to use as multiplier
     * @returns {M3} a new Matrix object with the resulting matrix
     */
    static elementMult(a, b){
        let result = new M3();
        for (let i=0; i<result.length; i++){
            result[i] = a[i] * b[i];
        }
        return result;
   }

    /** Inverts the given matrix m.
    * @param {M3} m the matrix to be inverted.
    * @return {M3} a new matrix with the resulting inverted values.
    */
    static invert(m){   // https://www.wikihow.com/Find-the-Inverse-of-a-3x3-Matrix
        let result = new M3();
        // TODO: Complete this method (ONLY FOR BONUS OBJECTIVE)
        let det = m.determinant();
        if (det==0){
            throw new Error("cannot invert (determinant = 0)");
        }
        let m_T = M3.transpose(m);
        let m_T_det = m_T.determinant_helper();
        
        let arr = []
        for (let i=2; i<(2+9); i++){ arr.push(Math.pow(-1, i)); }
        let tmp_arr = new M3(arr);

        let m_adj = M3.elementMult(m_T_det, tmp_arr);

        return M3.multiplyScalar(m_adj, 1/det);
    }

    /** Transposes the given matrix m.
    * @param {M3} m the matrix to be transposed.
    * @return {M3} a new matrix with the resulting transposed values.
    */
    static transpose(m){
        let result = new M3();
        // TODO: Complete this method
        result[0] = m[0];
        result[4] = m[4];
        result[8] = m[8];

        result[3] = m[1];
        result[1] = m[3];

        result[6] = m[2];
        result[2] = m[6];

        result[5] = m[7];
        result[7] = m[5];
        return result;
    }

    toString(){ return "[" + super.toString() + "]";}
}
