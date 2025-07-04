import { Injectable, signal } from "@angular/core";
import { UsersData } from "../Data/data.model";

@Injectable({providedIn:'root'})
export class ControlService{
    userDataChanged = signal<UsersData[]>([]);
    startedEditing = signal<number|null>(null);

    // private userDatas:UsersData[] = [
    //     new UsersData('Antony@10','Antony','Johnson','antony@gmail.com',new Date,'https://reqres.in/img/faces/1-image.jpg'),
    //     new UsersData('John682','Antony','Johnson','john@gmail.com',new Date,'https://reqres.in/img/faces/8-image.jpg'),
    //     new UsersData('Antony_Johnson','David','Antony', 'antonyjohnson@gmail.com',new Date, 'https://reqres.in/img/faces/9-image.jpg'),
    //   ];

     private userDatas:UsersData[]=[];

      setUserDatas(usersData:UsersData[]){
             this.userDatas = usersData;
             this.userDataChanged.set(this.userDatas.slice());
      }

      getUserDatas(){
          return this.userDatas.slice();
      }
      
      getUserData(index:number){
           return this.userDatas[index];
      }

      addNewUserData(userData:UsersData){
          this.userDatas.push(userData);
         this.userDataChanged.set(this.userDatas.slice());
      }

      updateUserDatas(index:number, newUserData:UsersData){
          this.userDatas[index] = newUserData;
          this.userDataChanged.set(this.userDatas.slice());
      }

      deleteUserDatas(index:number){
           this.userDatas.splice(index,1);
           this.userDataChanged.set(this.userDatas.slice());
      }

}