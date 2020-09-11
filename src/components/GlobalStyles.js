import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .content {
    background-color: ${({ theme }) => theme.content}
  }
  .statistic-box {
    background-color: ${({ theme }) => theme.statis}
  }
  
  .filters-container {
    background-color: ${({ theme }) => theme.filter}
  }

  .date-filter-container {
    background-color: ${({ theme }) => theme.date_filter}
  }

  .transactions-table {
    background-color: ${({ theme }) => theme.table}
  }

  .accounts-container {
    background-color: ${({ theme }) => theme.account}
  }

  .import {
    background-color: ${({ theme }) => theme.import};
  }

  .logo-wrapper {
    background-color: ${({ theme }) => theme.logo}
  }

  .card {
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }

  .table {
    background-color: ${({ theme }) => theme.table};
    color: ${({ theme }) => theme.text};
  }

  .form-import {
    color: ${({ theme }) => theme.text};
  }

  .edit-transaction-form {
    background-color: ${({ theme }) => theme.table};
    color: ${({ theme }) => theme.text};
  }

  .form-control {
    background-color: ${({ theme }) => theme.table};
    color: ${({ theme }) => theme.text};
  }

  .profile-content {
    color: ${({ theme }) => theme.text_profile};
  }
  `