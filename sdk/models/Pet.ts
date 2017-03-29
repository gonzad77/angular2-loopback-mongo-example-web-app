/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface PetInterface {
  "animal": any;
  "name": any;
  "id"?: any;
  "ownerId"?: any;
  owner?: Person;
}

export class Pet implements PetInterface {
  "animal": any;
  "name": any;
  "id": any;
  "ownerId": any;
  owner: Person;
  constructor(data?: PetInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pet`.
   */
  public static getModelName() {
    return "Pet";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pet for dynamic purposes.
  **/
  public static factory(data: PetInterface): Pet{
    return new Pet(data);
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
      name: 'Pet',
      plural: 'Pets',
      properties: {
        "animal": {
          name: 'animal',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "ownerId": {
          name: 'ownerId',
          type: 'any'
        },
      },
      relations: {
        owner: {
          name: 'owner',
          type: 'Person',
          model: 'Person'
        },
      }
    }
  }
}
