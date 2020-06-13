/* 40 Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
] */

const combinationSum2 = (candidates, target) => {
  candidates.sort( (a,b) => a - b);

  const backtrack = (candidates, target, idx, res = [], path = []) => {
      if (target == 0) return res.push([...path]);
      if (target < 0) return;
      for (let i = idx; i < candidates.length; i++) {
          if(idx === i || candidates[i] !== candidates[i - 1]) {
              path.push(candidates[i]);
              backtrack(candidates, target - candidates[i], i + 1, res, path);
              path.pop();
          }
      }
      return res;
  }
  return backtrack(candidates, target, 0);
};

/* 47Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
] */

const permuteUnique = nums => {
  nums.sort();
  return backTrack(nums);
};

const backTrack = (nums, res = [], path = []) => {
  if (nums.length === 0) {
    res.push([...path]);
  }

  let prev;
  for (let i = 0; i < nums.length; i++) {
    if (prev === nums[i]) continue; //ignore the situation of nums[i-1]==nums[i]

    path.push(nums[i]);
    prev = nums[i];
    backTrack(nums.slice(0, i).concat(nums.slice(i + 1)), res, path);
    path.pop();
  }
  return res;
};

permuteUnique([1, 1, 2]);

/* 90 Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
] */

const subsetsWithDup = nums => {
  nums = nums.sort();
  return backtrack(nums);
};

const backtrack = (nums, res = [], idx = 0, path = []) => {
  res.push([...path]);

  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) continue;

    path.push(nums[i]);
    backtrack(nums, res, i + 1, path);
    path.pop();
  }
  return res;
};

