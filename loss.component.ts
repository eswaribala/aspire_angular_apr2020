import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { InsuraceappService } from 'src/app/services/insuraceapp.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit {
  lostDate: FormControl;
  lostTime: FormControl;
  speed: FormControl;
  lostPlace: FormControl;
  destinationPlace: FormControl;
  purposeOfTravel: FormControl;
  passengerCount: FormControl;  
  policeStationName : FormControl;
  firNo: FormControl;
  statement: FormControl;  
  firFailed: FormControl;

  driverName: FormControl;
  relationShip: FormControl;
  address: FormControl;
  contactNumber: FormControl;
  dateOfBirth: FormControl;
  gender: FormControl;
  email: FormControl;
  drivingLicenseNumber: FormControl;
  effectiveFrom: FormControl;
  effectiveTo: FormControl;
  issuingRTO: FormControl;
  vehicleClass: FormControl;
  typeOfDriver: FormControl;
  
  lossForm: FormGroup;

  countries: any;
  purposes: any;
  vehicleClasses: any;
  typeOfDrivers: any;
  genderList: any;
  isFirFailed = true;

  constructor(private formBuilder: FormBuilder, private insuraceappService: InsuraceappService) { 
    this.lostDate = new  FormControl('', [Validators.required]);
    this.lostTime = new  FormControl('', [Validators.required]);
    this.speed = new  FormControl('', [Validators.required]);
    this.lostPlace = new  FormControl('', [Validators.required]);
    this.destinationPlace = new  FormControl('', [Validators.required]); 
    this.purposeOfTravel = new  FormControl('', [Validators.required]);
    this.passengerCount = new  FormControl('', [Validators.required,Validators.pattern('[0-9]{1,72}')]);
    this.policeStationName = new  FormControl('', [Validators.required]);
    this.firNo = new  FormControl('', [Validators.required]);
    this.statement = new  FormControl('', [Validators.required]); 
    this.firFailed = new  FormControl('', [Validators.required]);    
    this.driverName = new FormControl('', [Validators.required]); 
    this.relationShip = new FormControl('', [Validators.required]); 
    this.address = new FormControl('', [Validators.required]); 
    this.contactNumber = new FormControl('', [Validators.required]); 
    this.dateOfBirth = new FormControl('', [Validators.required]); 
    this.gender = new FormControl('', [Validators.required]); 
    this.email = new FormControl('', [Validators.required]); 
    this.drivingLicenseNumber = new FormControl('', [Validators.required]); 
    this.effectiveFrom = new FormControl('', [Validators.required]); 
    this.effectiveTo = new FormControl('', [Validators.required]); 
    this.issuingRTO = new FormControl('', [Validators.required]); 
    this.vehicleClass = new FormControl('', [Validators.required]); 
    this.typeOfDriver = new FormControl('', [Validators.required]); 

    this.lossForm = formBuilder.group({
      lostDate: this.lostDate,
      lostTime: this.lostTime,
      speed: this.speed,
      lostPlace: this.lostPlace,
      destinationPlace: this.destinationPlace,
      purposeOfTravel: this.purposeOfTravel,
      passengerCount: this.passengerCount,
      policeStationName: this.policeStationName,
      firNo: this.firNo,
      statement: this.statement,
      firFailed: this.firFailed,
      driverName: this.driverName,
      relationShip: this.relationShip,
      address: this.address,
      contactNumber: this.contactNumber,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      email: this.email,
      drivingLicenseNumber: this.drivingLicenseNumber,
      effectiveFrom: this.effectiveFrom,
      effectiveTo: this.effectiveTo,
      issuingRTO: this.issuingRTO,
      vehicleClass: this.vehicleClass,
      typeOfDriver: this.typeOfDriver
    });
  }

  ngOnInit(): void {
    //Obeservable goes with subscribe
    this.insuraceappService.getCountries().subscribe(
      response => {
          this.countries = response;
          console.log(this.countries);
      });

      this.purposes = this.insuraceappService.getPurpose();
      this.vehicleClasses = this.insuraceappService.getVehicleClass();
      this.typeOfDrivers = this.insuraceappService.getTypeOfDriver();
      this.genderList = this.insuraceappService.getGender();
  }

  getCountry(obj){
    console.log(obj.value );
  }

  getPurpose(obj){
    console.log(obj.value );
  }

  getVehicleClass(obj){
    console.log(obj.value );
  }

  getTypeOfDriver(obj){
    console.log(obj.value );
  }
}
