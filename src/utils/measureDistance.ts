// Function to measure distance between last ArrowBox and TargetBox
export function measureDistance(target1: string, target2: string) {
  const targetBox = document.querySelector(target1);
  const lastArrowBox = document.querySelector(target2);

  if (targetBox && lastArrowBox) {
    const targetBoxRect = targetBox.getBoundingClientRect();
    const lastArrowBoxRect = lastArrowBox.getBoundingClientRect();

    const distance = lastArrowBoxRect.left - targetBoxRect.left;

    console.log("distance", distance);
    return distance;
  } else {
    console.error("Could not find TargetBox or last ArrowBox");
    return null;
  }
}
