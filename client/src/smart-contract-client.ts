export const SMART_CONTRACT_ARC_32 = {
    "hints": {
      "createApplication()void": {
        "call_config": {
          "no_op": "CREATE"
        }
      },
      "createAsset()void": {
        "call_config": {
          "no_op": "CALL"
        }
      },
      "claimAsset()void": {
        "call_config": {
          "no_op": "CALL"
        }
      }
    },
    "bare_call_config": {
      "no_op": "NEVER",
      "opt_in": "NEVER",
      "close_out": "NEVER",
      "update_application": "NEVER",
      "delete_application": "NEVER"
    },
    "schema": {
      "local": {
        "declared": {},
        "reserved": {}
      },
      "global": {
        "declared": {
          "asset": {
            "type": "uint64",
            "key": "asset"
          }
        },
        "reserved": {}
      }
    },
    "state": {
      "global": {
        "num_byte_slices": 0,
        "num_uints": 1
      },
      "local": {
        "num_byte_slices": 0,
        "num_uints": 0
      }
    },
    "source": {
      "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCmludGNibG9jayAwIDEKYnl0ZWNibG9jayAweDYxNzM3MzY1NzQKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuMTA2LjIKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCnB1c2hpbnQgNgoqCnR4biBPbkNvbXBsZXRpb24KKwpzd2l0Y2ggKmNhbGxfTm9PcCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKmNyZWF0ZV9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRAoKKk5PVF9JTVBMRU1FTlRFRDoKCS8vIFRoZSByZXF1ZXN0ZWQgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIGNvbnRyYWN0LiBBcmUgeW91IHVzaW5nIHRoZSBjb3JyZWN0IE9uQ29tcGxldGU/IERpZCB5b3Ugc2V0IHlvdXIgYXBwIElEPwoJZXJyCgovLyBjcmVhdGVBcHBsaWNhdGlvbigpdm9pZAoqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbigpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50YyAxIC8vIDEKCXJldHVybgoKLy8gY3JlYXRlQXBwbGljYXRpb24oKTogdm9pZApjcmVhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDAgMAoJcmV0c3ViCgovLyBjcmVhdGVBc3NldCgpdm9pZAoqYWJpX3JvdXRlX2NyZWF0ZUFzc2V0OgoJLy8gZXhlY3V0ZSBjcmVhdGVBc3NldCgpdm9pZAoJY2FsbHN1YiBjcmVhdGVBc3NldAoJaW50YyAxIC8vIDEKCXJldHVybgoKLy8gY3JlYXRlQXNzZXQoKTogdm9pZAovLwovLyBUaGlzIGNyZWF0ZXMgdGhlIGFzc2V0IHRoYXQgY2FuIGJlIGNsYWltZWQgb25jZSBieSBhbnkgYWRkcmVzcy4KY3JlYXRlQXNzZXQ6Cglwcm90byAwIDAKCgkvLyBQdXNoIGVtcHR5IGJ5dGVzIGFmdGVyIHRoZSBmcmFtZSBwb2ludGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIGxvY2FsIHZhcmlhYmxlcwoJcHVzaGJ5dGVzIDB4CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjEyCgkvLyBhc3NlcnQodGhpcy50eG4uc2VuZGVyID09PSB0aGlzLmFwcC5jcmVhdG9yKQoJdHhuIFNlbmRlcgoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgoJcG9wCgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjEzCgkvLyBhc3NlcnQoIXRoaXMuYXNzZXQuZXhpc3RzKQoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYnl0ZWMgMCAvLyAgImFzc2V0IgoJYXBwX2dsb2JhbF9nZXRfZXgKCXN3YXAKCXBvcAoJIQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjE1CgkvLyBhc3NldCA9IHNlbmRBc3NldENyZWF0aW9uKHsKCS8vICAgICAgIGNvbmZpZ0Fzc2V0VG90YWw6IDEwMDAwLAoJLy8gICAgICAgY29uZmlnQXNzZXROYW1lOiAnTkFJSkEnLAoJLy8gICAgICAgY29uZmlnQXNzZXREZWNpbWFsczogMCwKCS8vICAgICAgIGNvbmZpZ0Fzc2V0RnJlZXplOiB0aGlzLmFwcC5hZGRyZXNzLAoJLy8gICAgICAgY29uZmlnQXNzZXRNYW5hZ2VyOiB0aGlzLmFwcC5hZGRyZXNzLAoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglwdXNoaW50IDMgLy8gYWNmZwoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czoxNgoJLy8gY29uZmlnQXNzZXRUb3RhbDogMTAwMDAKCXB1c2hpbnQgMTAwMDAKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXRUb3RhbAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czoxNwoJLy8gY29uZmlnQXNzZXROYW1lOiAnTkFJSkEnCglwdXNoYnl0ZXMgMHg0ZTQxNDk0YTQxIC8vICJOQUlKQSIKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXROYW1lCgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjE4CgkvLyBjb25maWdBc3NldERlY2ltYWxzOiAwCglpbnRjIDAgLy8gMAoJaXR4bl9maWVsZCBDb25maWdBc3NldERlY2ltYWxzCgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjE5CgkvLyBjb25maWdBc3NldEZyZWV6ZTogdGhpcy5hcHAuYWRkcmVzcwoJZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXRGcmVlemUKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MjAKCS8vIGNvbmZpZ0Fzc2V0TWFuYWdlcjogdGhpcy5hcHAuYWRkcmVzcwoJZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXRNYW5hZ2VyCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50YyAwIC8vIDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJaXR4biBDcmVhdGVkQXNzZXRJRAoJZnJhbWVfYnVyeSAwIC8vIGFzc2V0OiB1aW50NjQKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MjMKCS8vIHRoaXMuYXNzZXQudmFsdWUgPSBhc3NldAoJYnl0ZWMgMCAvLyAgImFzc2V0IgoJZnJhbWVfZGlnIDAgLy8gYXNzZXQ6IHVpbnQ2NAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gY2xhaW1Bc3NldCgpdm9pZAoqYWJpX3JvdXRlX2NsYWltQXNzZXQ6CgkvLyBleGVjdXRlIGNsYWltQXNzZXQoKXZvaWQKCWNhbGxzdWIgY2xhaW1Bc3NldAoJaW50YyAxIC8vIDEKCXJldHVybgoKLy8gY2xhaW1Bc3NldCgpOiB2b2lkCi8vCi8vIFRoaXMgbWV0aG9kIHRyYW5zZmVycyBhbmQgZnJlZXplcyBvbmUgdW5pdCBvZiB0aGUgYXNzZXQgdG8gdGhlIGFjY291bnQKLy8gdGhhdCBjYWxscyB0aGUgbWV0aG9kCmNsYWltQXNzZXQ6Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6MzEKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIuYXNzZXRCYWxhbmNlKHRoaXMuYXNzZXQudmFsdWUpID09PSAwKQoJdHhuIFNlbmRlcgoJYnl0ZWMgMCAvLyAgImFzc2V0IgoJYXBwX2dsb2JhbF9nZXQKCWFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQoJcG9wCglpbnRjIDAgLy8gMAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czozMwoJLy8gc2VuZEFzc2V0VHJhbnNmZXIoewoJLy8gICAgICAgYXNzZXRBbW91bnQ6IDEsCgkvLyAgICAgICBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIsCgkvLyAgICAgICB4ZmVyQXNzZXQ6IHRoaXMuYXNzZXQudmFsdWUsCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCXB1c2hpbnQgNCAvLyBheGZlcgoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czozNAoJLy8gYXNzZXRBbW91bnQ6IDEKCWludGMgMSAvLyAxCglpdHhuX2ZpZWxkIEFzc2V0QW1vdW50CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjM1CgkvLyBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIKCXR4biBTZW5kZXIKCWl0eG5fZmllbGQgQXNzZXRSZWNlaXZlcgoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czozNgoJLy8geGZlckFzc2V0OiB0aGlzLmFzc2V0LnZhbHVlCglieXRlYyAwIC8vICAiYXNzZXQiCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBYZmVyQXNzZXQKCgkvLyBGZWUgZmllbGQgbm90IHNldCwgZGVmYXVsdGluZyB0byAwCglpbnRjIDAgLy8gMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjM5CgkvLyBzZW5kQXNzZXRGcmVlemUoewoJLy8gICAgICAgZnJlZXplQXNzZXQ6IHRoaXMuYXNzZXQudmFsdWUsCgkvLyAgICAgICBmcmVlemVBc3NldEZyb3plbjogdHJ1ZSwKCS8vICAgICAgIGZyZWV6ZUFzc2V0QWNjb3VudDogdGhpcy50eG4uc2VuZGVyLAoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglwdXNoaW50IDUgLy8gYWZyegoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9Bc3NldENyZWF0b3IuYWxnby50czo0MAoJLy8gZnJlZXplQXNzZXQ6IHRoaXMuYXNzZXQudmFsdWUKCWJ5dGVjIDAgLy8gICJhc3NldCIKCWFwcF9nbG9iYWxfZ2V0CglpdHhuX2ZpZWxkIEZyZWV6ZUFzc2V0CgoJLy8gY29udHJhY3RzL0Fzc2V0Q3JlYXRvci5hbGdvLnRzOjQxCgkvLyBmcmVlemVBc3NldEZyb3plbjogdHJ1ZQoJaW50YyAxIC8vIDEKCWl0eG5fZmllbGQgRnJlZXplQXNzZXRGcm96ZW4KCgkvLyBjb250cmFjdHMvQXNzZXRDcmVhdG9yLmFsZ28udHM6NDIKCS8vIGZyZWV6ZUFzc2V0QWNjb3VudDogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIEZyZWV6ZUFzc2V0QWNjb3VudAoKCS8vIEZlZSBmaWVsZCBub3Qgc2V0LCBkZWZhdWx0aW5nIHRvIDAKCWludGMgMCAvLyAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIFN1Ym1pdCBpbm5lciB0cmFuc2FjdGlvbgoJaXR4bl9zdWJtaXQKCXJldHN1YgoKKmNyZWF0ZV9Ob09wOgoJcHVzaGJ5dGVzIDB4Yjg0NDdiMzYgLy8gbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbigpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY3JlYXRlIE5vT3AKCWVycgoKKmNhbGxfTm9PcDoKCXB1c2hieXRlcyAweGE2NWFhYmZlIC8vIG1ldGhvZCAiY3JlYXRlQXNzZXQoKXZvaWQiCglwdXNoYnl0ZXMgMHhmNTU3YTAzOCAvLyBtZXRob2QgImNsYWltQXNzZXQoKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFzc2V0ICphYmlfcm91dGVfY2xhaW1Bc3NldAoKCS8vIHRoaXMgY29udHJhY3QgZG9lcyBub3QgaW1wbGVtZW50IHRoZSBnaXZlbiBBQkkgbWV0aG9kIGZvciBjYWxsIE5vT3AKCWVycg==",
      "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
    },
    "contract": {
      "name": "AssetCreator",
      "desc": "",
      "methods": [
        {
          "name": "createApplication",
          "args": [],
          "returns": {
            "type": "void"
          }
        },
        {
          "name": "createAsset",
          "desc": "This creates the asset that can be claimed once by any address.",
          "args": [],
          "returns": {
            "type": "void"
          }
        },
        {
          "name": "claimAsset",
          "desc": "This method transfers and freezes one unit of the asset to the account\nthat calls the method",
          "args": [],
          "returns": {
            "type": "void"
          }
        }
      ]
    }
  }