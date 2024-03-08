export default function getNeighborhoodsList() {
  //function definition
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  //Arrow function definition
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
