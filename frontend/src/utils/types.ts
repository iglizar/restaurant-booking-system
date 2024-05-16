import { UseFormReturn } from "react-hook-form";

export type Restaurant = {
	id: string;
  image: string;
  name: string;
  logo: string;
  href: string;
	address: string;
	backgroundImage: string;
  openingHour: string;
  closingHour: string;
};

export type Slot = {
	date: Date;
	available: Boolean;
}

export type Availability = {
	date: Date;
	slots: Slot[];
}

export type FormValues = {
	restaurant: Restaurant;
	availabilities: Availability[];
	selectedDate: Availability;
	selectedSlot: Date;
	name: string;
	email: string;
	phone: string;
	peopleQuantity: number;
}

export type ContextType = {
	step: number;
	nextStep: () => void;
	previousStep: () => void;
	methods: UseFormReturn<FormValues>;
}