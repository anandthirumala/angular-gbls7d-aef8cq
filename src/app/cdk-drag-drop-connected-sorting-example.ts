import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  todo = [
    {name:"Example",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example1",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example2",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example3",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
  ];

  done = [
    {name:"Example4",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example5",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example6",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example7",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
    {name:"Example8",num:2,char:"4",length:"5",difficulty:"easy", selected
    : null},
  ];

  cars = [
'Volvo',
'Saab',
'VW',
'Audi'
  ];
  

started(event: CdkDragStart<any>){
console.log(event);
}

   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */