export function matchesSearchQuery(title, searchString) {
    const submissionTitleLowerCase = title.toLowerCase();
    const searchStringInLowerCase = searchString.toLowerCase();
    if (submissionTitleLowerCase.includes(searchStringInLowerCase)) {
      return true;
    }
    return false;
  }