Feature: search on ebay

  Scenario: Find items on Ebay
    Given enter Ebay page
    When  search the article <articulo>
    When  click on the magnifying glass
    Then  search result

     Examples:
      | articulo |
      | Pilas    |
