import Classroom from './0-classroom';

export default function initializeRooms() {
  const classroomSizes = [new Classroom(19), new Classroom(20), new Classroom(34)];
  return classroomSizes;
}
