/* tslint:disable */

declare var Object: any;
export interface PersonInterface {
  "name": any;
  "surname": any;
  "age": any;
  "enabled": any;
  "id"?: any;
}

export class Person implements PersonInterface {
  "name": any;
  "surname": any;
  "age": any;
  "enabled": any;
  "id": any;
  constructor(data?: PersonInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Person for dynamic purposes.
  **/
  public static factory(data: PersonInterface): Person{
    return new Person(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Person',
      plural: 'People',
      properties: {
        "name": {
          name: 'name',
          type: 'any'
        },
        "surname": {
          name: 'surname',
          type: 'any'
        },
        "age": {
          name: 'age',
          type: 'any'
        },
        "enabled": {
          name: 'enabled',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
