export function getGrade(a: number, b: number, c: number): string {
  const score = (a + b + c) / 3;
  let grade: string = "";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else if (score >= 0 && score < 60) {
    grade = "F";
  }
  return grade;
}
